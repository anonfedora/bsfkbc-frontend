import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Play } from "lucide-react";

interface VideoCardProps {
  id: string;
  title: string;
  duration: string;
  date: string;
  thumbnailUrl: string;
  description: string;
  videoUrl: string;
  isFacebookVideo?: boolean;
}

export function VideoCard({
  id,
  title,
  duration,
  date,
  thumbnailUrl,
  description,
  videoUrl,
  isFacebookVideo = false,
}: VideoCardProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <div className="relative">
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {duration}
        </div>
        <Link href={`/videos/${id}`} className="block relative group">
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-primary/90 rounded-full p-3">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
          {isFacebookVideo && (
            <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
              Facebook
            </div>
          )}
        </Link>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardDescription>{date}</CardDescription>
        </div>
        <CardTitle className="text-secondary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/videos/${id}`} className="w-full">
          <Button
            variant="ghost"
            className="w-full text-primary hover:text-primary/90 hover:bg-accent"
          >
            Watch Video
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
