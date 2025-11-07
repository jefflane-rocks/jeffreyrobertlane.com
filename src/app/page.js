import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";

const audioPlayerList = [
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/01%20Carry%20On.mp3",
    title: "Carry On",
    artist: "Burningdown",
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
    genre: "Alternative Rock",
    description: "An epic rock ballad about moving on and starting again",
    tags: ["Break away", "Start Over", "Reinvent", "Move", "Find yourself"],
  },

  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/03%20Fall.mp3",
    title: "Fall",
    artist: "Burningdown",
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
    genre: "Alternative Rock",
    description:
      "A song of faith and optimism that your dreams can come true if you believe and chase after them.",
    tags: ["Faith", "Optimism", "Hope", "Miracles", "Dream"],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/05%20Fifteen.mp3",
    title: "Fifteen",
    artist: "Burningdown",
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
    genre: "Alternative Rock",
    description: "A song about forbidden love.",
    tags: ["Forbidden", "Love", "Elope", "Escape"],
  },
  {
    src: "https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/09%20Satellite.mp3",
    title: "Satellite",
    artist: "Burningdown",
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
    <div className="grid place-items-center px-12">
      <AudioPlayer audioPlayerList={audioPlayerList} />
    </div>
  );
}
