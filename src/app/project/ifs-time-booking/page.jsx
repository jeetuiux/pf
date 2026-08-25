"use client";

import Image from "next/image";

export default function IFSTimeBooking() {
  return (
    <main className="project-page min-h-screen bg-[#080808] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="min-h-[70vh] px-6 md:px-14 lg:px-20 py-28 flex flex-col justify-center">

        <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-5 font-medium">
          Product Design
        </p>

        <h1
          className="font-black tracking-tighter leading-[0.9]"
          style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
        >
          IFS Time Booking.
        </h1>

        <p className="mt-8 max-w-3xl text-lg md:text-2xl text-white/50 leading-relaxed">
          Time Booking experience redesign for enterprise users.
        </p>

      </section>


      {/* =====================================================
          PROJECT OVERVIEW
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Project Overview" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          <InfoCard
            title="Role"
            value="UX / Product Designer"
          />

          <InfoCard
            title="Platform"
            value="Enterprise Application"
          />

          <InfoCard
            title="Domain"
            value="Enterprise / Operations"
          />

          <InfoCard
            title="Focus"
            value="Time Booking"
          />

        </div>

      </section>


      {/* =====================================================
          BACKGROUND & CONTEXT
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Background & Context" />

        <div className="max-w-5xl">

          <p className="text-lg md:text-2xl text-white/75 leading-relaxed">
            Add the background and context of the IFS Time Booking
            application here.
          </p>

        </div>

      </section>


      {/* =====================================================
          PROBLEM
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="The Problem" />

        <div className="max-w-5xl">

          <p className="text-lg md:text-2xl text-white/75 leading-relaxed">
            Describe the problem users were facing with the existing
            time booking workflow.
          </p>

        </div>

      </section>


      {/* =====================================================
          EXISTING EXPERIENCE
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Existing Experience" />

        <p className="max-w-4xl text-lg md:text-xl text-white/60 leading-relaxed mb-12">
          Explain the existing workflow, screens, and major usability
          challenges.
        </p>

        {/* Add screenshots here later */}

        <div className="grid md:grid-cols-2 gap-6">

          <Placeholder title="Existing Screen 01" />

          <Placeholder title="Existing Screen 02" />

        </div>

      </section>


      {/* =====================================================
          RESEARCH
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="User Research" />

        <div className="grid md:grid-cols-2 gap-6">

          <ResearchCard
            title="Research Method"
            text="Add the research methods used for this project."
          />

          <ResearchCard
            title="Key Findings"
            text="Add the important findings from your research."
          />

        </div>

      </section>


      {/* =====================================================
          USER FLOW
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="User Flow" />

        <p className="max-w-4xl text-lg md:text-xl text-white/60 leading-relaxed mb-12">
          Add the existing and improved user flow here.
        </p>

        <Placeholder title="User Flow Diagram" />

      </section>


      {/* =====================================================
          DESIGN PROCESS
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Design Process" />

        <div className="grid md:grid-cols-4 gap-4">

          <ProcessCard number="01" title="Understand" />

          <ProcessCard number="02" title="Define" />

          <ProcessCard number="03" title="Design" />

          <ProcessCard number="04" title="Validate" />

        </div>

      </section>


      {/* =====================================================
          SOLUTION
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="The Solution" />

        <div className="max-w-5xl">

          <p className="text-lg md:text-2xl text-white/75 leading-relaxed">
            Explain the design solution and how it addresses the
            problems identified earlier.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL DESIGN
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Final Design" />

        <p className="max-w-4xl text-lg md:text-xl text-white/60 leading-relaxed mb-12">
          Add the final IFS Time Booking screens below.
        </p>

        {/* =================================================
            ADD YOUR FINAL DESIGN IMAGES HERE
            Example:

            <CaseStudyImage
              src="/photo/ifs/01.png"
              alt="IFS Time Booking screen"
            />

        ================================================== */}

        <div className="space-y-6">

          <Placeholder title="Final Design Screen 01" />

          <Placeholder title="Final Design Screen 02" />

          <Placeholder title="Final Design Screen 03" />

        </div>

      </section>


      {/* =====================================================
          OUTCOME
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Outcome & Learnings" />

        <div className="max-w-5xl">

          <p className="text-lg md:text-2xl text-white/75 leading-relaxed">
            Add the outcome, improvements, learnings, and impact of
            the redesign here.
          </p>

        </div>

      </section>


      {/* =====================================================
          END
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-32 border-t border-white/10">

        <div className="max-w-4xl">

          <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-5">
            IFS Time Booking
          </p>

          <h2
            className="font-black tracking-tighter leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            End of Case Study.
          </h2>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">
      {title}
    </h2>
  );
}


function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-[9px] text-white/35 tracking-[0.35em] uppercase mb-3">
        {title}
      </p>

      <p className="text-white/85 text-sm md:text-base">
        {value}
      </p>
    </div>
  );
}


function ResearchCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 md:p-9">

      <h3 className="text-xl md:text-2xl font-bold mb-5">
        {title}
      </h3>

      <p className="text-white/60 leading-relaxed">
        {text}
      </p>

    </div>
  );
}


function ProcessCard({ number, title }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

      <p className="text-[#ff6b1a] text-xs tracking-widest mb-6">
        {number}
      </p>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

    </div>
  );
}


function Placeholder({ title }) {
  return (
    <div className="w-full min-h-[300px] rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex items-center justify-center">

      <p className="text-white/25 text-sm tracking-widest uppercase">
        {title}
      </p>

    </div>
  );
}


function CaseStudyImage({ src, alt }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1600}
        className="w-full h-auto"
      />
    </div>
  );
}