import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Music, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hymnsData } from "@/lib/hymns-data";

// // This would typically come from your database or API
// const hymnsData = {
//   "students-rise-now": {
//     title: "Students, Rise Now (BSF Hymn)",
//     number: "BSF",
//     tune: "8.7.8.7.D with Refrain",
//     composer: "Rev. (Dr.) Paul Odgen Davidson, 1993",
//     lyrics: [
//       {
//         verse:
//           "Students, rise now, build the Kingdom,\nHeed the Master's call today\nStudents, stand up, follow Jesus;\nHe's the Life and the Truth, the Way,\nIn the city, in the village,\nIn each near or distant land,\nPreach the gospel, make disciples\nAnd fulfil the Lord's command,",
//         isChorus: false,
//       },
//       {
//         verse: "Students, rise now, rise and build (2x)",
//         isChorus: true,
//       },
//       {
//         verse:
//           "As true students of the Scripture,\nWorkmen unashamed and bold,\nGrow in Knowledge, deepen wisdom;\nGod's own truth is purest gold,\nAnd with prayer and devotion\nSeek the Master's face each day;\nLet the Kingdom come within you\nAnd among you in all ways,",
//         isChorus: false,
//       },
//       {
//         verse: "Students, rise now, rise and build (2x)",
//         isChorus: true,
//       },
//       {
//         verse:
//           "As the servants of the Saviour\nLet God's will be done on earth\nJoining hands with other Christians\nShare the message of new Birth;\nWe're forgiven, we've been pardoned\nThrough the death of Jesus Christ;\nGod's own love gift has been offered;\nOur redemption's sacrifice",
//         isChorus: false,
//       },
//       {
//         verse: "Students, rise now, rise and build (2x)",
//         isChorus: true,
//       },
//       {
//         verse:
//           "As the members of Christ's body,\nSharing in one common life,\nBearing burdens, sharing sorrows,\nUse God's love to banish strife,\nWe're united in the church now,\nFounded on the rock of faith;\nWe have gifts, now let us use them\nThat the Church may grow in grace",
//         isChorus: false,
//       },
//       {
//         verse: "Students, rise now, rise and build (2x)",
//         isChorus: true,
//       },
//       {
//         verse:
//           "Jesus calls us as disciples\nTo give all our lives to Him,\nBringing talents, time and money,\nAnd our futures yet unlived.\nHe is building, let us join Him;\nLet us answer Heaven's call;\nStudents, rise now, rise and follow\nFollow Him as Lord of all,",
//         isChorus: false,
//       },
//       {
//         verse: "Students, rise now, rise and build (2x)",
//         isChorus: true,
//       },
//     ],
//     notes:
//       "The BSF Hymn was composed with the tune in 1993 by the Rev. (Dr.) Paul Odgen Davidson. He was the Head of the Department of Music at The Nigerian Baptist Theological Seminary, Ogbomoso.",
//   },
//   "1": {
//     title: "Amazing Grace",
//     number: "1",
//     tune: "NEW BRITAIN C.M.",
//     composer: "John Newton, 1779",
//     lyrics: [
//       {
//         verse:
//           "Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now I see.",
//         isChorus: false,
//       },
//       // Additional verses would be included here
//     ],
//     notes:
//       "This beloved hymn was written by John Newton, a former slave trader who experienced God's transforming grace.",
//   },
//   // Additional hymn data for each hymn would be included here
// };

export default function HymnPage({ params }: { params: { slug: string } }) {
  const hymn = hymnsData[params.slug];

  // If the hymn doesn't exist, show 404
  if (!hymn) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={hymn.title}
        description={`Hymn #${hymn.number} - ${hymn.composer}`}
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-3xl">
          <Link href="/hymns">
            <Button variant="ghost" className="mb-6 pl-0 text-primary">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Hymns
            </Button>
          </Link>

          <div className="flex items-center mb-8">
            <Music className="h-8 w-8 text-primary mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-secondary">
                {hymn.title}
              </h1>
              <p className="text-muted-foreground">Tune: {hymn.tune}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            {hymn.lyrics.map((section, index) => (
              <div
                key={index}
                className={
                  section.isChorus ? "pl-8 italic font-medium mb-6" : "mb-6"
                }
              >
                {section.isChorus && (
                  <span className="block font-bold mb-1">Refrain:</span>
                )}
                {section.verse.split("\n").map((line, i) => (
                  <p key={i} className="my-1">
                    {line}
                  </p>
                ))}
              </div>
            ))}

            {hymn.notes && (
              <div className="mt-12 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">About this hymn</h3>
                <p className="text-muted-foreground">{hymn.notes}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
