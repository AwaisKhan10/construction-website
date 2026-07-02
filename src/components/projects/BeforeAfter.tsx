"use client";

import { useState } from "react";
import Image from "next/image";

type BeforeAfterProps = {
  before: string;
  after: string;
};

export function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [slider, setSlider] = useState(50);

  return (
    <div className="relative aspect-[16/9] rounded-sm overflow-hidden select-none">
      <Image src={after} alt="After" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${slider}%` }}>
        <div className="relative w-[100vw] max-w-none h-full" style={{ width: `${100 / (slider / 100)}%` }}>
          <Image src={before} alt="Before" fill className="object-cover" sizes="100vw" />
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={slider}
        onChange={(e) => setSlider(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label="Before and after comparison slider"
      />
      <div
        className="absolute top-0 bottom-0 w-1 bg-secondary z-20 pointer-events-none"
        style={{ left: `${slider}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-primary rounded-full" />
        </div>
      </div>
      <span className="absolute top-4 left-4 px-3 py-1 bg-primary/80 text-white text-xs font-semibold rounded-sm">
        Before
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-sm">
        After
      </span>
    </div>
  );
}
