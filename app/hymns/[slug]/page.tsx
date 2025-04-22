import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Sample hymn data - in a real app, this would come from an API
const hymns = {
  "students-rise-now": {
    title: "Students, Rise Now (BSF Hymn)",
    number: "BSF",
    lyrics: `Students, rise now, build the Kingdom,
Heed the Master's call today
Students, stand up, follow Jesus;
He's the Life and the Truth, the Way.

Chorus:
Rise and build, rise and build,
For the Master calls today
Rise and build, rise and build,
For the Master calls today

Verse 2:
With the Bible as our guide,
And the Spirit as our light,
We will march on, never tiring,
Till we win the glorious fight.

Verse 3:
In our studies and our work,
In our service and our play,
We will show forth Christ's example,
Walking in His perfect way.

Verse 4:
As true students of the Scripture,
Workmen unashamed and bold,
Grow in Knowledge, deepen wisdom;
God's own truth is purest gold.

Verse 5:
And with prayer and devotion
Seek the Master's face each day;
Let the Kingdom come within you
And among you in all ways.`,
    composer: "Rev. (Dr.) Paul Odgen Davidson",
    year: "1993",
    description: "The BSF Hymn was composed with the tune in 1993 by the Rev. (Dr.) Paul Odgen Davidson, Head of the Department of Music at The Nigerian Baptist Theological Seminary, Ogbomoso. This hymn embodies our mission to rise and build God's Kingdom as students of faith."
  },
  "1": {
    title: "Amazing Grace",
    number: "1",
    lyrics: `Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.

'Twas grace that taught my heart to fear,
And grace my fears relieved;
How precious did that grace appear
The hour I first believed.

Through many dangers, toils, and snares,
I have already come;
'Tis grace hath brought me safe thus far,
And grace will lead me home.

When we've been there ten thousand years,
Bright shining as the sun,
We've no less days to sing God's praise
Than when we first begun.`,
    composer: "John Newton",
    year: "1779",
    description: "Written by John Newton, a former slave trader who became an Anglican clergyman, this hymn speaks of God's amazing grace that saves and transforms lives."
  },
  "2": {
    title: "Great Is Thy Faithfulness",
    number: "2",
    lyrics: `Great is Thy faithfulness, O God my Father,
There is no shadow of turning with Thee;
Thou changest not, Thy compassions, they fail not
As Thou hast been Thou forever wilt be.

Chorus:
Great is Thy faithfulness! Great is Thy faithfulness!
Morning by morning new mercies I see;
All I have needed Thy hand hath provided—
Great is Thy faithfulness, Lord, unto me!

Summer and winter, and springtime and harvest,
Sun, moon and stars in their courses above,
Join with all nature in manifold witness
To Thy great faithfulness, mercy and love.

Pardon for sin and a peace that endureth,
Thine own dear presence to cheer and to guide;
Strength for today and bright hope for tomorrow,
Blessings all mine, with ten thousand beside!`,
    composer: "Thomas O. Chisholm",
    year: "1923",
    description: "Based on Lamentations 3:22-23, this hymn celebrates God's unchanging faithfulness and daily mercies."
  },
  "3": {
    title: "How Great Thou Art",
    number: "3",
    lyrics: `O Lord my God, when I in awesome wonder
Consider all the worlds Thy hands have made;
I see the stars, I hear the rolling thunder,
Thy power throughout the universe displayed.

Chorus:
Then sings my soul, my Savior God, to Thee,
How great Thou art, how great Thou art.
Then sings my soul, my Savior God, to Thee,
How great Thou art, how great Thou art!

When through the woods, and forest glades I wander,
And hear the birds sing sweetly in the trees.
When I look down, from lofty mountain grandeur
And see the brook, and feel the gentle breeze.

And when I think, that God, His Son not sparing;
Sent Him to die, I scarce can take it in;
That on the Cross, my burden gladly bearing,
He bled and died to take away my sin.

When Christ shall come, with shout of acclamation,
And take me home, what joy shall fill my heart.
Then I shall bow, in humble adoration,
And then proclaim: "My God, how great Thou art!"`,
    composer: "Carl Boberg",
    year: "1885",
    description: "A hymn of praise that reflects on God's creation, Christ's sacrifice, and the hope of His return."
  },
  "4": {
    title: "Holy, Holy, Holy",
    number: "4",
    lyrics: `Holy, holy, holy! Lord God Almighty!
Early in the morning our song shall rise to Thee;
Holy, holy, holy, merciful and mighty!
God in three Persons, blessed Trinity!

Holy, holy, holy! All the saints adore Thee,
Casting down their golden crowns around the glassy sea;
Cherubim and seraphim falling down before Thee,
Who was, and is, and evermore shall be.

Holy, holy, holy! Though the darkness hide Thee,
Though the eye of sinful man Thy glory may not see;
Only Thou art holy; there is none beside Thee,
Perfect in power, in love, and purity.

Holy, holy, holy! Lord God Almighty!
All Thy works shall praise Thy Name, in earth, and sky, and sea;
Holy, holy, holy; merciful and mighty!
God in three Persons, blessed Trinity!`,
    composer: "Reginald Heber",
    year: "1826",
    description: "A majestic hymn that proclaims the holiness of the triune God."
  },
  "5": {
    title: "It Is Well With My Soul",
    number: "5",
    lyrics: `When peace like a river attendeth my way,
When sorrows like sea billows roll;
Whatever my lot, Thou hast taught me to say,
It is well, it is well with my soul.

Chorus:
It is well with my soul,
It is well, it is well with my soul.

Though Satan should buffet, though trials should come,
Let this blest assurance control,
That Christ hath regarded my helpless estate,
And hath shed His own blood for my soul.

My sin—oh, the bliss of this glorious thought!—
My sin, not in part but the whole,
Is nailed to the cross, and I bear it no more,
Praise the Lord, praise the Lord, O my soul!

And, Lord, haste the day when my faith shall be sight,
The clouds be rolled back as a scroll;
The trump shall resound, and the Lord shall descend,
Even so, it is well with my soul.`,
    composer: "Horatio G. Spafford",
    year: "1873",
    description: "Written after the tragic loss of the author's children, this hymn expresses deep faith in God's sovereignty."
  },
  "6": {
    title: "What a Friend We Have in Jesus",
    number: "6",
    lyrics: `What a friend we have in Jesus,
All our sins and griefs to bear!
What a privilege to carry
Everything to God in prayer!
O what peace we often forfeit,
O what needless pain we bear,
All because we do not carry
Everything to God in prayer!

Have we trials and temptations?
Is there trouble anywhere?
We should never be discouraged;
Take it to the Lord in prayer.
Can we find a friend so faithful
Who will all our sorrows share?
Jesus knows our every weakness;
Take it to the Lord in prayer.

Are we weak and heavy laden,
Cumbered with a load of care?
Precious Savior, still our refuge;
Take it to the Lord in prayer.
Do thy friends despise, forsake thee?
Take it to the Lord in prayer!
In His arms He'll take and shield thee;
Thou wilt find a solace there.`,
    composer: "Joseph M. Scriven",
    year: "1855",
    description: "A comforting hymn that reminds us of Jesus' friendship and the power of prayer."
  },
  "7": {
    title: "Blessed Assurance",
    number: "7",
    lyrics: `Blessed assurance, Jesus is mine!
O what a foretaste of glory divine!
Heir of salvation, purchase of God,
Born of His Spirit, washed in His blood.

Chorus:
This is my story, this is my song,
Praising my Savior all the day long;
This is my story, this is my song,
Praising my Savior all the day long.

Perfect submission, perfect delight,
Visions of rapture now burst on my sight;
Angels, descending, bring from above
Echoes of mercy, whispers of love.

Perfect submission, all is at rest,
I in my Savior am happy and blest,
Watching and waiting, looking above,
Filled with His goodness, lost in His love.`,
    composer: "Fanny J. Crosby",
    year: "1873",
    description: "A joyful hymn celebrating the assurance of salvation through Jesus Christ."
  },
  "8": {
    title: "To God Be the Glory",
    number: "8",
    lyrics: `To God be the glory, great things He hath done,
So loved He the world that He gave us His Son,
Who yielded His life an atonement for sin,
And opened the life gate that all may go in.

Chorus:
Praise the Lord, praise the Lord,
Let the earth hear His voice!
Praise the Lord, praise the Lord,
Let the people rejoice!
O come to the Father, through Jesus the Son,
And give Him the glory, great things He hath done.

O perfect redemption, the purchase of blood,
To every believer the promise of God;
The vilest offender who truly believes,
That moment from Jesus a pardon receives.

Great things He hath taught us, great things He hath done,
And great our rejoicing through Jesus the Son;
But purer, and higher, and greater will be
Our wonder, our transport, when Jesus we see.`,
    composer: "Fanny J. Crosby",
    year: "1875",
    description: "A triumphant hymn that gives glory to God for His great works of salvation."
  },
  "9": {
    title: "I Surrender All",
    number: "9",
    lyrics: `All to Jesus I surrender,
All to Him I freely give;
I will ever love and trust Him,
In His presence daily live.

Chorus:
I surrender all, I surrender all,
All to Thee, my blessed Savior,
I surrender all.

All to Jesus I surrender,
Humbly at His feet I bow,
Worldly pleasures all forsaken;
Take me, Jesus, take me now.

All to Jesus I surrender,
Make me, Savior, wholly Thine;
Let me feel the Holy Spirit,
Truly know that Thou art mine.

All to Jesus I surrender,
Lord, I give myself to Thee;
Fill me with Thy love and power;
Let Thy blessing fall on me.

All to Jesus I surrender,
Now I feel the sacred flame.
O the joy of full salvation!
Glory, glory, to His name!`,
    composer: "Judson W. Van DeVenter",
    year: "1896",
    description: "A hymn of complete surrender to Jesus Christ and His will."
  }
};

interface HymnPageProps {
  params: {
    slug: string;
  };
}

export default function HymnPage({ params }: HymnPageProps) {
  const hymn = hymns[params.slug as keyof typeof hymns];

  if (!hymn) {
    return (
      <>
        <PageHeader title="Hymn Not Found" />
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground mb-4">
                The hymn you're looking for could not be found.
              </p>
              <Link href="/hymns">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Hymns
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={`Hymn #${hymn.number}: ${hymn.title}`}
        description={hymn.description}
      />

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/hymns">
                <Button variant="outline" className="gap-2 mb-4">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Hymns
                </Button>
              </Link>
            </div>

            <div className="prose max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">
                  {hymn.title}
                </h2>
                <p className="text-muted-foreground">
                  Composed by {hymn.composer} ({hymn.year})
                </p>
              </div>

              <div className="whitespace-pre-line text-muted-foreground">
                {hymn.lyrics}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
