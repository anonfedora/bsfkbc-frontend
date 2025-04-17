import type React from "react";
import "./videos.css";

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="videos-layout">{children}</div>;
}
