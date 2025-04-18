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
import Link from "next/link"; // Import the Link component

interface HymnProps {
  title: string;
  number: string;
  firstLine: string;
  slug: string; // Add this property to identify the hymn's URL
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
  const hymns = [
    {
      title: "Students, Rise Now (BSF Hymn)",
      number: "BSF",
      firstLine: "Students, rise now, build the Kingdom",
      slug: "students-rise-now", // Add the slug for each hymn
    },
    {
      title: "Amazing Grace",
      number: "1",
      firstLine: "Amazing grace! How sweet the sound",
      slug: "1",
    },
    {
      title: "Great Is Thy Faithfulness",
      number: "2",
      firstLine: "Great is Thy faithfulness, O God my Father",
      slug: "2",
    },
    {
      title: "How Great Thou Art",
      number: "3",
      firstLine: "O Lord my God, when I in awesome wonder",
      slug: "3",
    },
    {
      title: "Holy, Holy, Holy",
      number: "4",
      firstLine: "Holy, holy, holy! Lord God Almighty!",
      slug: "4",
    },
    {
      title: "It Is Well With My Soul",
      number: "5",
      firstLine: "When peace like a river attendeth my way",
      slug: "5",
    },
    {
      title: "What a Friend We Have in Jesus",
      number: "6",
      firstLine:
        "What a friend we have in Jesus, all our sins and griefs to bear",
      slug: "6",
    },
    {
      title: "Blessed Assurance",
      number: "7",
      firstLine: "Blessed assurance, Jesus is mine!",
      slug: "7",
    },
    {
      title: "To God Be the Glory",
      number: "8",
      firstLine: "To God be the glory, great things He hath done",
      slug: "8",
    },
    {
      title: "I Surrender All",
      number: "9",
      firstLine: "All to Jesus I surrender, all to Him I freely give",
      slug: "9",
    },
  ];

  return (
    <>
      <PageHeader
        title="Hymns Collection"
        description="Browse and search our collection of hymns"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <Card className="bg-primary/5 border-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                <Star className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-secondary">
                    BSF Official Hymn
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold mb-2">Students, Rise Now</h3>
                <p className="text-muted-foreground mb-4 italic">
                  "Students, rise now, build the Kingdom,
                  <br />
                  Heed the Master's call today
                  <br />
                  Students, stand up, follow Jesus;
                  <br />
                  He's the Life and the Truth, the Way."
                </p>
                <p className="text-sm text-muted-foreground">
                  The BSF Hymn was composed with the tune in 1993 by the Rev.
                  (Dr.) Paul Odgen Davidson, Head of the Department of Music at
                  The Nigerian Baptist Theological Seminary, Ogbomoso. This hymn
                  embodies our mission to rise and build God's Kingdom as
                  students of faith.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/hymns/students-rise-now" className="w-full">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    View Full Lyrics
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search hymns by title, number or lyrics..."
                className="pl-8"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hymns.map((hymn, index) => (
              <HymnCard key={index} {...hymn} />
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
