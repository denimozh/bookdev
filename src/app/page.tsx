import { AboutUs, Hero, PicksOfTheMonth, Slider } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4">
      <div className="pb-1">
        <Hero/>
      </div>
      <AboutUs/>
      <Slider/>
      <PicksOfTheMonth/>

    </main>
  );
}
