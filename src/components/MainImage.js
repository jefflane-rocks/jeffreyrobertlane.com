"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";

function MainImage() {
  const width = useWindowWidth();
  return (
    <>
      {width > 768 ? (
        <div className="relative w-full h-128 overflow-hidden place-content-center min-w-[1480] min-h-[526] lg:transform-none sm:transform-[translateX(-250px)]">
          <Image
            src="https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/images/jeff_joshuatree_flyingv.png"
            width={3434}
            height={1221}
            alt="Picture of Jeff Lane in Joshua Tree with Flying V guitar"
          />
        </div>
      ) : (
        <div className="relative w-full h-128 overflow-hidden place-content-center">
          <Image
            src="https://vnshanftypzvajpbbwxr.supabase.co/storage/v1/object/public/images/jeff_joshuatree_flyingv_cropped.png"
            width={1210}
            height={1210}
            alt="Picture of Jeff Lane in Joshua Tree with Flying V guitar"
          />
        </div>
      )}
    </>
  );
}

export default MainImage;
