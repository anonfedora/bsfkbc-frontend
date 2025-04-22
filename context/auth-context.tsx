"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  register: (
    userData: RegisterData
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
};

type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Initialize auth state from localStorage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }

    setIsLoading(false);
  }, []);

  // Check if user is authenticated
  const isAuthenticated = !!user && !!token;

  // API base URL from environment variable
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  // Login function
  const login = async (email: string, password: string) => {
    try {
      console.log("Attempting to login with API URL:", API_BASE_URL);
      
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email, password })
      });

      // Log response status and headers for debugging
      console.log("Login response status:", response.status);
      console.log("Login response headers:", Object.fromEntries(response.headers.entries()));

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error("Error parsing response:", parseError);
        return { 
          success: false, 
          message: "Unable to parse server response. Please try again later." 
        };
      }

      if (!response.ok) {
        console.error("Login failed with status:", response.status, "message:", data.message);
        return { success: false, message: data.message || "Login failed" };
      }

      // Store token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Update state
      setToken(data.token);
      setUser(data.user);

      return { success: true };
    } catch (error) {
      // Log the specific error type and message
      console.error("Login error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });

      // Handle specific network errors
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        return { 
          success: false, 
          message: "Unable to connect to the server. Please check your internet connection and try again." 
        };
      }

      return { 
        success: false, 
        message: "An unexpected error occurred. Please try again later." 
      };
    }
  };

  // Register function
  const register = async (userData: RegisterData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Registration failed",
        };
      }

      // Store token and user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Update state
      setToken(data.token);
      setUser(data.user);

      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);
      return {
        success: false,
        message: "An error occurred during registration",
      };
    }
  };

  // Logout function
  const logout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Reset state
    setToken(null);
    setUser(null);

    // Redirect to home page
    router.push("/");
  };

  const value = {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
