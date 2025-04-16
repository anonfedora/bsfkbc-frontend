import { PageHeader } from "@/components/page-header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Learn more about the Baptist Student Fellowship of Kaduna Baptist Conference"
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-4">
                Our Motto
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                "Growing together in faith, fellowship, and service."
              </p>

              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-4">
                Vision
              </h2>
              <p className="text-muted-foreground mb-6">
                To be a vibrant community of Baptist students united in faith,
                growing spiritually, and making a positive impact on campus and
                beyond.
              </p>

              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-4">
                Mission
              </h2>
              <p className="text-muted-foreground mb-6">
                The Baptist Student Fellowship exists to provide a supportive
                Christian community for students, promote spiritual growth
                through Bible study and prayer, develop leadership skills, and
                engage in service and outreach activities that demonstrate
                Christ's love.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/bsf-logo.png"
                alt="BSF Students"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-6 text-center">
              Our History
            </h2>
            <div className="prose max-w-none text-muted-foreground">
              <p className="mb-4">
                The Baptist Student Fellowship in Nigeria has a rich heritage
                dating back to 1956 when Miss Mary Frank Kirkpatrick, the
                pioneer missionary of student ministries, arrived in Nigeria.
                What began as small prayer meetings in dormitories has grown
                into a vibrant organization with chapters across multiple
                institutions throughout the country.
              </p>
              <p className="mb-4">
                The Baptist Student Fellowship of Kaduna Baptist Conference was
                established in 1958, the same year Revd. Thomas Kennedy, a
                Southern Baptist Missionary, made contact with students in
                Northern Nigeria, particularly in Zaria. Initially known as
                Baptist Student Union (BSU), the name was officially changed to
                Baptist Student Fellowship (BSF) in 1978.
              </p>
              <p className="mb-4">
                Over the decades, BSF has been instrumental in nurturing young
                Baptist leaders who have gone on to serve in various capacities
                in churches, denominations, and society. Key milestones include
                the first National Conference in 1966, the publication of "Seek
                Daily" devotionals in 1967, and the establishment of the BSF
                Alumni Association in 1982.
              </p>
              <p className="mb-4">
                The fellowship has consistently maintained its focus on Bible
                study, discipleship, leadership development, and community
                service. Annual conferences, retreats, and outreach programs
                have become hallmarks of the BSF experience, creating lasting
                memories and spiritual milestones for generations of students.
              </p>
              <p>
                Today, BSF continues to adapt to the changing needs of students
                while remaining firmly rooted in Baptist principles and
                traditions. As expressed in our BSF hymn, "Students, rise now,
                build the Kingdom, Heed the Master's call today," we remain
                committed to our founding vision of creating a supportive
                community where students can grow in their faith and prepare for
                a lifetime of Christian service.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-secondary mb-6 text-center">
              Our Philosophy & Objectives
            </h2>
            <div className="prose max-w-none text-muted-foreground">
              <p className="mb-4">
                The Nigerian Baptist Convention's Christian witness and ministry
                in institutions of higher learning are in response to the Lord's
                command to make the gospel known to all persons. Because schools
                are engaged in the quest for knowledge and truth of which God is
                the Source, the Christian perspective is essential to realize
                the ultimate in education.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3 text-secondary">
                Our Objectives
              </h3>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  To lead students to a commitment to Jesus Christ as Saviour
                  and Lord.
                </li>
                <li>
                  To involve them in the study of biblical truth and Christian
                  discipleship.
                </li>
                <li>
                  To lead them to relate academic disciplines to their Christian
                  faith.
                </li>
                <li>
                  To involve them in responsible church membership and
                  denominational understanding and participation.
                </li>
                <li>
                  To involve them in the study and practical participation in
                  mission for kingdom expansion.
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-secondary">
                BSF Distinctives
              </h3>
              <p className="mb-4">
                The BSF logo symbolizes our purpose and goals through four key
                elements: the academic cap (representing academic success), the
                church building (symbolizing the local church), the open Bible
                (representing God's Word), and the globe (depicting our
                worldwide vision).
              </p>
              <p>
                Our motto, "By this all men will know that you are my disciples,
                if you love one another" (John 13:35), reminds us that love and
                unity within the Christian community are the characteristics by
                which others will recognize the followers of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
