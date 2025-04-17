import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { VideoCard } from "@/components/video-card";

export default function VideosPage() {
  const videos = [
    {
      id: "1",
      title: "BSFKBC ANNUAL RETREAT",
      duration: "00:30",
      date: "April 05, 2025",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Watch the highlights from our 2022 Annual Conference featuring worship, keynote speakers, and fellowship activities.",
      videoUrl: "https://web.facebook.com/watch/?v=1018611853095682&rdid=PQ6gy8hKf2P1t1cc",
      isFacebookVideo: true,
    },
    {
      id: "2",
      title: "Easter Celebration Service",
      duration: "48:32",
      date: "April 9, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Full recording of our special Easter service celebrating the resurrection of Christ.",
      videoUrl: "https://www.facebook.com/100081245681360/videos/689923726788243",
      isFacebookVideo: true,
    },
    {
      id: "3",
      title: "BSF Choir Performance",
      duration: "12:45",
      date: "April 15, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Watch our award-winning choir perform 'Total Praise' and 'How Great Thou Art' at the Regional Gospel Choir Competition.",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      isFacebookVideo: false,
    },
    {
      id: "4",
      title: "Bible Study: Introduction to Romans",
      duration: "52:18",
      date: "February 22, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "First session of our Bible study series on the Book of Romans led by Pastor James Thompson.",
      videoUrl: "https://www.facebook.com/watch?v=9876543210987654",
      isFacebookVideo: true,
    },
    {
      id: "5",
      title: "Community Outreach Documentary",
      duration: "18:37",
      date: "March 20, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Documentary of our recent outreach program at Hope Orphanage, showcasing the impact of our service.",
      videoUrl:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      isFacebookVideo: false,
    },
    {
      id: "6",
      title: "Leadership Workshop: Servant Leadership",
      duration: "45:12",
      date: "January 15, 2023",
      thumbnailUrl: "/placeholder.svg?height=225&width=400",
      description:
        "Workshop on servant leadership principles for Christian leaders, presented by Dr. Samuel Johnson.",
      videoUrl: "https://fb.watch/abcdefghijk/",
      isFacebookVideo: true,
    },
  ];

  return (
    <>
      <PageHeader
        title="Videos"
        description="Watch sermons, worship sessions, events, and more"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="max-w-md w-full">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search videos..."
                  className="pl-8"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option value="all">All Categories</option>
                <option value="sermons">Sermons</option>
                <option value="worship">Worship</option>
                <option value="events">Events</option>
                <option value="bible-study">Bible Study</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                duration={video.duration}
                date={video.date}
                thumbnailUrl={video.thumbnailUrl}
                description={video.description}
                videoUrl={video.videoUrl}
                isFacebookVideo={video.isFacebookVideo}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
