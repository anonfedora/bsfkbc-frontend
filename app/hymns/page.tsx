"use client";

import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Music, BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HymnProps {
  title: string;
  number: string;
  firstLine: string;
  slug: string;
}

function HymnCard({ title, number, firstLine, slug }: HymnProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-secondary">{title}</CardTitle>
          <span className="text-sm font-medium text-primary">#{number}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">{firstLine}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/hymns/${slug}`} className="w-full">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10"
          >
            View Lyrics
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default function HymnsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const hymns = [
    {
      title: "Students, Rise Now (BSF Hymn)",
      number: "BSF",
      firstLine: "Students, rise now, build the Kingdom, Heed the Master's call today",
      slug: "students-rise-now",
    },
    {
      title: "Amazing Grace",
      number: "1",
      firstLine: "Amazing grace! How sweet the sound That saved a wretch like me!",
      slug: "1",
    },
    {
      title: "Great Is Thy Faithfulness",
      number: "2",
      firstLine: "Great is Thy faithfulness, O God my Father, There is no shadow of turning with Thee",
      slug: "2",
    },
    {
      title: "How Great Thou Art",
      number: "3",
      firstLine: "O Lord my God, when I in awesome wonder Consider all the worlds Thy hands have made",
      slug: "3",
    },
    {
      title: "Holy, Holy, Holy",
      number: "4",
      firstLine: "Holy, holy, holy! Lord God Almighty! Early in the morning our song shall rise to Thee",
      slug: "4",
    },
    {
      title: "It Is Well With My Soul",
      number: "5",
      firstLine: "When peace like a river attendeth my way, When sorrows like sea billows roll",
      slug: "5",
    },
    {
      title: "What a Friend We Have in Jesus",
      number: "6",
      firstLine: "What a friend we have in Jesus, all our sins and griefs to bear",
      slug: "6",
    },
    {
      title: "Blessed Assurance",
      number: "7",
      firstLine: "Blessed assurance, Jesus is mine! O what a foretaste of glory divine!",
      slug: "7",
    },
    {
      title: "To God Be the Glory",
      number: "8",
      firstLine: "To God be the glory, great things He hath done, So loved He the world that He gave us His Son",
      slug: "8",
    },
    {
      title: "I Surrender All",
      number: "9",
      firstLine: "All to Jesus I surrender, all to Him I freely give",
      slug: "9",
    },
  ];

  const [filteredHymns, setFilteredHymns] = useState(hymns);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = hymns.filter(
      (hymn) =>
        hymn.title.toLowerCase().includes(query) ||
        hymn.firstLine.toLowerCase().includes(query) ||
        hymn.number.includes(query)
    );
    setFilteredHymns(filtered);
  };

  return (
    <>
      <PageHeader
        title="Hymns"
        description="Browse and search through our collection of hymns"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search hymns by title, number, or lyrics..."
                className="pl-10"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>

            <div className="grid gap-6">
              {filteredHymns.map((hymn) => (
                <HymnCard
                  key={hymn.slug}
                  title={hymn.title}
                  number={hymn.number}
                  firstLine={hymn.firstLine}
                  slug={hymn.slug}
                />
              ))}

              {filteredHymns.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No hymns found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Music className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-secondary">
                    Hymn of the Week
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold mb-2">Amazing Grace</h3>
                <p className="text-muted-foreground mb-4 italic">
                  "Amazing grace! How sweet the sound
                  <br />
                  That saved a wretch like me!
                  <br />I once was lost, but now am found;
                  <br />
                  Was blind, but now I see."
                </p>
                <p className="text-sm text-muted-foreground">
                  Written by John Newton in 1772, this beloved hymn speaks of
                  God's amazing grace that saves and transforms lives.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/hymns/1" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                  >
                    View Full Lyrics
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-secondary">
                    About Our Hymnal
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Baptist Student Fellowship uses the Baptist Hymnal, which
                  contains a rich collection of traditional and contemporary
                  hymns that have been cherished by generations of believers.
                </p>
                <p className="text-muted-foreground">
                  Our online hymn database is continually being updated to
                  include lyrics, sheet music, and historical information about
                  each hymn.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
