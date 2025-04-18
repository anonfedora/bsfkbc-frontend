"use client";

import type React from "react";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LockKeyhole, UserCircle, Shield, Loader2 } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function BiodataPage() {
  const { login, register, isAuthenticated, user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  // Form states
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Loading states
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  // Error states
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  // Handle login form change
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setLoginError("");
  };

  // Handle register form change
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
    setRegisterError("");
  };

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginLoading(true);
    setLoginError("");

    try {
      const { success, message } = await login(
        loginData.email,
        loginData.password
      );

      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome back to BSF Kaduna Baptist Conference",
        });
        router.push("/biodata/profile");
      } else {
        setLoginError(
          message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      setLoginError("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoginLoading(false);
    }
  };

  // Handle register submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    setRegisterError("");

    // Validate password match
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError("Passwords do not match");
      setIsRegisterLoading(false);
      return;
    }

    try {
      const { success, message } = await register({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        password: registerData.password,
      });

      if (success) {
        toast({
          title: "Registration successful",
          description: "Your account has been created successfully",
        });
        router.push("/biodata/profile");
      } else {
        setRegisterError(message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setRegisterError("An unexpected error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsRegisterLoading(false);
    }
  }; 
  
  // TODO - Temporarily route registered usere to home instead of /biodata/profile
  // If user is already authenticated, redirect to profile
  if (isAuthenticated && user) {
    router.push("/");
    return null;
  }

  return (
    <>
      <PageHeader
        title="Student Biodata"
        description="Manage your personal information and profile"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <form onSubmit={handleLogin}>
                    <CardHeader>
                      <CardTitle className="text-secondary">Sign In</CardTitle>
                      <CardDescription>
                        Access your student profile and biodata
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {loginError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
                          {loginError}
                        </div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="m.example@example.com"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Button
                            variant="link"
                            className="text-xs text-primary p-0 h-auto"
                          >
                            Forgot password?
                          </Button>
                        </div>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isLoginLoading}
                      >
                        {isLoginLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing In...
                          </>
                        ) : (
                          "Sign In"
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              <TabsContent value="register">
                <Card>
                  <form onSubmit={handleRegister}>
                    <CardHeader>
                      <CardTitle className="text-secondary">Register</CardTitle>
                      <CardDescription>
                        Create a new account to manage your student profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {registerError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
                          {registerError}
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            value={registerData.firstName}
                            onChange={handleRegisterChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            value={registerData.lastName}
                            onChange={handleRegisterChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registerEmail">Email</Label>
                        <Input
                          id="registerEmail"
                          name="email"
                          type="email"
                          placeholder="m.example@example.com"
                          value={registerData.email}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registerPassword">Password</Label>
                        <Input
                          id="registerPassword"
                          name="password"
                          type="password"
                          value={registerData.password}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={registerData.confirmPassword}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isRegisterLoading}
                      >
                        {isRegisterLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Registering...
                          </>
                        ) : (
                          "Register"
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter text-secondary text-center">
                About Student Biodata
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <UserCircle className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg text-secondary">
                      Personal Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Manage your personal information, contact details, and
                      academic information in one place.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <LockKeyhole className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg text-secondary">
                      Secure Storage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Your information is stored securely and is only accessible
                      to authorized personnel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg text-secondary">
                      Privacy Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Control what information is shared with other members of
                      the fellowship.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
