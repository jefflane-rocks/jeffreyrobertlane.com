import Image from "next/image";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function Home() {
  return (
    <div>
      <div>Test Deploy</div>
      <AudioPlayer
        src="https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/mp3s/Move.mp3"
        title="Move by Burningdown"
        description="Epic Rock Ballad about moving on and starting again"
        tags="Break away, Start Over, Reinvent, Move, Find yourself"
      />
    </div>
  );
}
