"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface FacebookVideoPlayerProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

export function FacebookVideoPlayer({
  videoUrl,
  title,
  className = "",
}: FacebookVideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVideoId = (url: string): string | null => {
    const patterns = [
      /facebook\.com\/.*\/videos\/(?:t\.\d+\/)?(\d+)/,
      /facebook\.com\/watch\/?\?v=(\d+)/,
      /fb\.watch\/([^/]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) return match[1];
    }

    return null;
  };

  const videoId = getVideoId(videoUrl);

  useEffect(() => {
    if (!videoId) {
      setIsLoading(false);
      return;
    }

    const loadFacebookSDK = () => {
      if (document.getElementById("facebook-jssdk")) return;

      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "",
          xfbml: true,
          version: "v18.0",
        });
        window.FB.Event.subscribe("xfbml.render", () => {
          setIsLoading(false);
          setIsLoaded(true);
        });
        window.FB.XFBML.parse();
      };

      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    };

    if (window.FB) {
      window.FB.XFBML.parse(containerRef.current);
      setIsLoading(false);
      setIsLoaded(true);
    } else {
      loadFacebookSDK();
    }

    return () => {
      const fbRoot = document.getElementById("fb-root");
      if (fbRoot) fbRoot.remove();
    };
  }, [videoId]);

  if (!videoId) {
    return (
      <div className={`bg-gray-100 rounded-lg p-4 text-center ${className}`}>
        <p className="text-muted-foreground">Invalid Facebook video URL</p>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full flex justify-center items-center ${className}`}
    >
      <div id="fb-root"></div>
      <div
        className="facebook-video-container w-full h-full flex justify-center items-center"
        ref={containerRef}
      >
        <div
          className="fb-video w-full h-full"
          data-href={videoUrl}
          data-width="100%"
          data-allowfullscreen="true"
          data-show-captions="true"
          data-show-text="false"
          data-controls="true"
        />
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 rounded-lg">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
            </div>
            <p className="text-muted-foreground">Loading video...</p>
          </div>
        </div>
      )}

      {!isLoading && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <p className="text-muted-foreground">Video failed to load</p>
            <Button variant="link" asChild className="mt-2">
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                Watch on Facebook
              </a>
            </Button>
          </div>
        </div>
      )}

      {title && <p className="mt-2 text-sm font-medium">{title}</p>}
    </div>
  );
}

declare global {
  interface Window {
    FB: {
      init: (config: {
        appId: string;
        xfbml: boolean;
        version: string;
      }) => void;
      XFBML: {
        parse: (element?: HTMLElement | null) => void;
      };
      Event: {
        subscribe: (event: string, callback: () => void) => void;
      };
    };
    fbAsyncInit: () => void;
  }
}
