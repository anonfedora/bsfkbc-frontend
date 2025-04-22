import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsDetailProps {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  // In a real application, you would fetch this data from an API or database
  const newsItems = [
    {
      id: "1",
      title: "BAPTIST STUDENT'S FELLOWSHIP ANNUAL RETREAT",
      date: "17th-20th April, 2025",
      excerpt:
        "Annual Easter Retreat, BSFKBC",
      imageUrl: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/486138250_664417159609801_3061242768304579367_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeG35LBr3WJFyXWnxLtYtOO1XF7iGEkef15cXuIYSR5_Xv3dWpR5-uvREoQ0pEN5SvCqLpBpGrdl0gosWtC0VKr_&_nc_ohc=01GqnrIAgfUQ7kNvwHzjx-K&_nc_oc=AdnHGt0DzAH-Dagk2YND2fFFVJ5uPHuAzPXHszTFk_42sUlUHH3nGlOsOFmu_4ihOzI&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=PXlhEB2BDXK-QnxrG9H1Ig&oh=00_AfHR7hj5r3YownzQlzcB32N73IbUs-ynF3bK6ua1WGTiOA&oe=6804508C",
      content:
        "The Baptist Student Fellowship Annual Retreat is a time of spiritual renewal, fellowship, and growth. Join us for four days of inspiring messages, worship, workshops, and recreational activities. This year's theme is 'Rooted and Built Up in Christ' based on Colossians 2:7. Early bird registration is now open until July 15th. Don't miss this opportunity to deepen your faith and connect with fellow Baptist students from across the region.",
    },
    {
      id: "2",
      title: "Missions 2025 Elected",
      date: "May 28, 2023",
      excerpt:
        "2025 Missions and Evangelism, BSFKBC, Pambegua",
      imageUrl: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/489158772_674201518631365_7568726674996577532_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEC9iP5zYra0qY-uH8ynPDRBMxJlI9szqIEzEmUj2zOolpm4oHAOCIRxesoSBQOxFdS-2W5vxC8qeGpO8uS5FLd&_nc_ohc=r_0jVArQpksQ7kNvwE6L_0p&_nc_oc=AdmJqfNizy62z7NX1SmUJ4gojHNVFvksru9U-7wyzWzS9nOZG88zBlmFayoL85bQc5Y&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=cED7LGzB3Pt1dCBeDxfwrQ&oh=00_AfHsm6KA4tELc711Yf__eeCSLRMg3SR2zv1Hd_xYMw3uDQ&oe=68044FB5",
      content:
        "We are pleased to announce the results of our recent elections for the BSF Executive Committee. After a transparent and democratic process, the following students have been elected to serve for the 2023-2024 academic year: John Adewale (President), Sarah Okafor (Vice President), Emmanuel Bello (General Secretary), Grace Musa (Financial Secretary), David Eze (Prayer Secretary), and Ruth Adamu (Welfare Secretary). The new committee will be inaugurated during our next general meeting. Please join us in congratulating them and praying for God's wisdom as they lead our fellowship.",
    },
    {
      id: "3",
      title: "Conference In Session 2025",
      date: "Feb, 2025",
      excerpt:
        "Baptist Studen'ts Fellowship Annual Conference in Session, Kaduna Baptist Conference",
      imageUrl: "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/483062692_654586830592834_7481385174951399359_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHkYeo-V3ArejFtQcLD0uBmqSNEWqWOWkqpI0RapY5aSqNzP86NLOpLOrKc7t8nDJnCBdhy2C0BSBhjlWQZ8npa&_nc_ohc=ChS5awTv2G0Q7kNvwG-JS7Y&_nc_oc=AdnELP8NL1E_NNaUMA4SBoEd-PS69RPQW6CvNulT8e57cZveqZUaOPz0mtMtwV3BKk0&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=2zcFJGv7S6ZeUIetNRGtog&oh=00_AfF7_fz2SP2-GmD4KTcFz9lpz0hIqoPzCNYpUUm_WezIQA&oe=68044273",
      content:
        "We are proud to announce that the Baptist Student Fellowship Choir has won first place in the Regional Gospel Choir Competition held last weekend. Competing against 15 other choirs from various institutions, our choir impressed the judges with their harmonious rendition of 'Total Praise' and 'How Great Thou Art'. Special thanks to the choir director, Michael Johnson, for his dedication and leadership. The choir will now represent our region in the national competition scheduled for August. Let's continue to support them with our prayers and encouragement.",
    },
  ];

  const newsItem =
    newsItems.find((item) => item.id === params.id) || newsItems[0];

  return (
    <>
      <PageHeader title="News Detail" description="Read the full story" />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to News</span>
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary mb-4">
                {newsItem.title}
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {newsItem.date}
                </span>
              </div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={newsItem.imageUrl || "/placeholder.svg"}
                  alt={newsItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose max-w-none">
                <p className="text-muted-foreground">{newsItem.content}</p>
                <p className="text-muted-foreground mt-4">
                  For more information, please contact the BSF secretary at
                  secretary@bsfkaduna.org or visit our office during regular
                  hours.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-6">
              <Button
                variant="outline"
                className="gap-1 border-primary text-primary hover:bg-primary/10"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Link href="/news">
                <Button
                  variant="outline"
                  className="gap-1 border-primary text-primary hover:bg-primary/10"
                >
                  More News
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
