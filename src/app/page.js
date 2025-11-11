import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";
import { PlayIcon } from "@heroicons/react/24/solid";

const audioPlayerList = [
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/01%20Carry%20On.mp3",
    title: "Carry On",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/GVIIQ6EnLPQ",
    genre: "Alternative Rock",
    description: "A song about starting over, finding yourself",
    tags: [
      "Break away",
      "Start Over",
      "Reinvent",
      "Determination",
      "Find yourself",
    ],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/02%20Move.mp3",
    title: "Move",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/S1rEiO__PL0",
    genre: "Alternative Rock",
    description: "An epic rock ballad about moving on and starting again",
    tags: ["Break away", "Start Over", "Reinvent", "Move", "Find yourself"],
  },

  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/03%20Fall.mp3",
    title: "Fall",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/YsVS-n6cVKo",
    genre: "Alternative Rock",
    description:
      "A head in hands lament of selfish mistakes; a confession and apology.",
    tags: [
      "Sorrow",
      "Mistake",
      "Apology",
      "Lament",
      "Unfaithfulness",
      "Broken Relationship",
      "Cheater",
    ],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/04%20Miracles.mp3",
    title: "Miracles",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/xPxxe9L6-EY",
    genre: "Alternative Rock",
    description:
      "A song of faith and optimism that your dreams can come true if you believe and chase after them.",
    tags: ["Faith", "Optimism", "Hope", "Miracles", "Dream"],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/05%20Fifteen.mp3",
    title: "Fifteen",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/AsKjI32LYkY",
    genre: "Alternative Rock",
    description: "A song empathizing with teenage angst and insecurities.",
    tags: [
      "Fit in",
      "Peer Pressure",
      "Angst",
      "Insecure",
      "High School",
      "Teenager",
      "Teen",
      "Teens",
    ],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/06%20Remember.mp3",
    title: "Remember",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/60_oQKPAnuI",
    genre: "Alternative Rock",
    description:
      "A pledge of love and faithfulness even when separated by time and distance.",
    tags: [
      "Remember",
      "Faithfulness",
      "Love",
      "Promise",
      "Hope",
      "Dedication",
      "Missing You",
    ],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/07%20Anything.mp3",
    title: "Anything",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/hg9PCVQYvi4",
    genre: "Alternative Rock",
    description:
      "A song of devotion and willingness to sacrifice everything for love.",
    tags: [
      "Devotion",
      "Sacrifice",
      "Love",
      "Dedication",
      "For richer or poorer",
      "In sickness and in health",
    ],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/08%20Romeo.mp3",
    title: "Romeo",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/1Jehpab8oYY",
    genre: "Alternative Rock",
    description: "A song about forbidden love.",
    tags: ["Forbidden", "Love", "Elope", "Escape"],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/09%20Satellite.mp3",
    title: "Satellite",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/p9ky3wykQA0",
    genre: "Alternative Rock",
    description:
      "A song inspired by driving on Pacific Coast Highway on a summer evening.",
    tags: [
      "Summer",
      "Convertible",
      "Ocean",
      "PCH",
      "Southern California",
      "Los Angeles",
      "Redondo Beach",
      "Malibu",
      "Hermosa Beach",
      "Manhattan Beach",
    ],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/10%20May%20The%20Road%20Bring%20You%20Home.mp3",
    title: "May the Road Bring You Home",
    artist: "Burningdown",
    lyricVideo: "https://youtu.be/fmqyT8Kuf9k",
    genre: "Folk",
    description: "A blessing, a prayer for your guidance.",
    tags: [
      "Hymn",
      "Prayer",
      "Blessing",
      "Direction",
      "Guidance",
      "Inner Voice",
      "Heart",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-128 overflow-y-hidden overflow-x-hidden place-content-center min-w-[1480] min-h-[526]">
        <Image
          src="https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/images/jeff_joshuatree_flyingv.jpg"
          width={3434}
          height={1221}
          alt="Picture of Jeff Lane in Joshua Tree with Flying V guitar"
        />
      </div>
      <div className="grid place-items-center px-12 my-4">
        <p className="inline-block">
          Click on a song title below to load the song in the player. Click the{" "}
          <PlayIcon className="h-8 w-8 inline-block align-middle" /> button next
          to the waveform to listen.
        </p>
      </div>
      <div className="grid place-items-center px-12">
        <AudioPlayer audioPlayerList={audioPlayerList} />
      </div>
      <div className="grid align-text-top place-items-center px-12 mb-20">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold w-full text-center mb-2">About</h1>
          <p className="inline-block text-xl mb-2">
            Originally from Denver, Colorado, Jeff moved to Los Angeles to
            pursure songwriting and formed various projects.
          </p>
          <p className="inline-block text-xl">
            Burningdown is his alternative rock project and Heart of Cygnus is
            his progressive metal project. He also composes classical and
            sometimes folk and country.
          </p>
          <hr className="my-4" />
          <p className="text-xl mt-2">Jeffrey Robert Lane</p>
          <p className="text-xl">
            <a href="mailto:jeff@jeffreyrobertlane.com">
              jeff@jeffreyrobertlane.com
            </a>
          </p>
          <p className="text-xl">(323) 452-3616</p>
        </div>
      </div>
    </div>
  );
}
