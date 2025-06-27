'use client';

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end']
  });

  const text1 = [
    { word: 'Nous', color: 'text-white' },
    { word: 'sommes', color: 'text-white' },
    { word: 'votre', color: 'text-lime-200' },
    { word: 'Partenaire', color: 'text-lime-200' },
    { word: "IA", color: 'text-lime-200' },
    { word: "360°", color: 'text-white' },
    { word: "👋", isEmoji: true },
  ];

  const text2 = [
    { word: 'Nous', color: 'text-white' },
    { word: 'transformons', color: 'text-white' },
    { word: 'les', color: 'text-white' },
    { word: 'entreprises', color: 'text-lime-200' },
    { word: '✨', isEmoji: true },
    { word: 'en', color: 'text-white' },
    { word: 'Leader', color: 'text-white' },
    { word: 'IA', color: 'text-white' },
    { word: '.', color: 'text-white' },
  ];

  const allWords = [...text1, ...text2];
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, allWords.length]);

  useMotionValueEvent(wordIndex, 'change', (latest) => {
    setCurrentWord(Math.floor(latest));
  });

  const renderLine = (line: typeof text1 | typeof text2) => {
    return line.map((item, index) => {
      const absoluteIndex = allWords.findIndex((w) => w === item);
      const isActive = absoluteIndex < currentWord;
      const baseStyle = item.isEmoji
        ? "mx-1 inline-block rounded-full px-2 py-1 bg-gradient-to-br from-[#0a291f] to-[#010b09]"
        : "mr-2";
      const colorStyle = isActive
        ? item.color ?? "text-white"
        : "text-white/15";

      return (
        <span key={index} className={twMerge(baseStyle, colorStyle)}>
          {item.word}
        </span>
      );
    });
  };

  return (
    <section className="py-28 lg:py-40 ">
      <div className="container mx-auto px-4">
        <div className="sticky top-28 text-left">
          <div className="text-4xl md:text-6xl lg:text-7xl font-medium leading-snug">
            <div>{renderLine(text1)}</div>
            <div className="mt-4">{renderLine(text2)}</div>
          </div>
        </div>
        <div className="h-[50vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
