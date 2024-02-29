"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import React, { useRef } from "react";

const DefaultPage = () => {
  const { theme } = useTheme();
  const textWelcome = useRef<HTMLHeadingElement>(null);
  const underWelcomeTextLine = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.from(textWelcome.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(underWelcomeTextLine.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <>
      <section className="h-[calc(100vh_-_3rem)] w-[100%] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1
          ref={textWelcome}
          className="text-slate-800 dark:text-slate-50 md:text-7xl text-3xl lg:text-5xl font-bold text-center relative z-20"
        >
          <span className="text-2xl fi">Welcome to the</span>
          <br /> Titan Avertisement
        </h1>
        <div className="w-[40rem] h-40 relative">
          <div ref={underWelcomeTextLine}>
          <div
              className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent teal-500 to-transparent h-[2px] w-3/4 blur-sm"
            />
            <div
              className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"
            />
            <div  
              className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"
            />
            <div
              className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"
            />
          </div>

          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={150}
            className="w-full h-full"
            particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
          /> */}

          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </section>
      <section>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
        <h2>Hello, world!</h2>
      </section>
    </>
  );
};
export default DefaultPage;
