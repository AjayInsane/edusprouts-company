"use client";

import { RetroGrid } from "@/components/ui/retro-grid";
import AboutLand from "../laanding/aboutland";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <AboutLand />

      <RetroGrid />
    </div>
  );
}
