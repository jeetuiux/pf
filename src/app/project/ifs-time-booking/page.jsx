"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Cursor from "@/components/Cursor";

export default function IFSTimeBooking() {

  /* =========================================================
     ADD YOUR SLIDES HERE
  ========================================================= */

  const slides = [
    {
      src: "/photo/Ifs/1.png",
      alt: "IFS Time Booking - Introduction",
    },
    {
      src: "/photo/Ifs/2.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/3.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/4.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/5.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/6.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/7.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/8.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/9.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/10.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/11.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/12.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/13.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/14.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/15.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/16.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/17.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/18.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/19.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/20.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/21.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/22.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/23.png",
      alt: "IFS Time Booking - Problem",
    },
    {
      src: "/photo/Ifs/24.png",
      alt: "IFS Time Booking - Problem",
    },


  ];


  /* =========================================================
     STATE
  ========================================================= */

  const [currentSlide, setCurrentSlide] = useState(0);


  /* =========================================================
     NAVIGATION
  ========================================================= */

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev < slides.length - 1 ? prev + 1 : prev
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };


  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [currentSlide]);


  /* =========================================================
     PAGE
  ========================================================= */

  return (

    <main
      className="relative h-screen w-full overflow-hidden bg-[#080808] text-white"
      
    >

      <Cursor />

      {/* =====================================================
          SLIDE
      ====================================================== */}

      <div className="relative w-full h-full flex items-center justify-center">

        <Image
          key={currentSlide}
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          fill
          priority={currentSlide === 0}
          sizes="100vw"
          className="
            object-contain
            animate-in
            fade-in
            duration-500
          "
        />
      </div>

      {/* =====================================================
          SLIDE COUNTER
      ====================================================== */}

      <div className="
        absolute
        top-6
        right-6
        md:top-10
        md:right-10
        text-xs
        tracking-[0.3em]
        text-white/50
        z-20
      ">

        {String(currentSlide + 1).padStart(2, "0")}
        {" / "}
        {String(slides.length).padStart(2, "0")}

      </div>


      {/* =====================================================
          PREVIOUS BUTTON
      ====================================================== */}

      <button
        onClick={previousSlide}
        disabled={currentSlide === 0}
        className={`
          absolute
          bottom-8
          right-28
          md:bottom-12
          md:right-36
          z-20

          w-12
          h-12
          md:w-14
          md:h-14

          rounded-full
          border
          border-white/20
          bg-black/30
          backdrop-blur-md

          flex
          items-center
          justify-center

          text-xl
          transition-all
          duration-300

          ${
            currentSlide === 0
              ? "opacity-20 cursor-not-allowed"
              : "hover:bg-white hover:text-black hover:scale-105"
          }
        `}
        aria-label="Previous slide"
      >
        ←
      </button>


      {/* =====================================================
          NEXT BUTTON
      ====================================================== */}

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className={`
          absolute
          bottom-8
          right-8
          md:bottom-12
          md:right-16
          z-20

          w-12
          h-12
          md:w-14
          md:h-14

          rounded-full
          border
          border-white/20
          bg-white
          text-black

          flex
          items-center
          justify-center

          text-xl
          transition-all
          duration-300

          ${
            currentSlide === slides.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-105 hover:bg-white/80"
          }
        `}
        aria-label="Next slide"
      >
        →
      </button>


      {/* =====================================================
          KEYBOARD HINT
      ====================================================== */}

      <div className="
        hidden
        md:block
        absolute
        bottom-12
        left-10
        z-20
        text-[10px]
        tracking-[0.3em]
        uppercase
        text-white/35
      ">

        Use ← → arrow keys to navigate

      </div>


      {/* =====================================================
          PROGRESS BAR
      ====================================================== */}

      <div className="
        absolute
        bottom-0
        left-0
        w-full
        h-[2px]
        bg-white/10
        z-20
      ">

        <div
          className="
            h-full
            bg-[#ff6b1a]
            transition-all
            duration-500
          "
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />

      </div>

    </main>
  );
}