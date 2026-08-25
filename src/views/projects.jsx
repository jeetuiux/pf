"use client";

import Image from "next/image";

export default function AvocetMobileCaseStudy() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* =====================================================
          HERO / TITLE
      ====================================================== */}
      <section className="min-h-screen px-6 md:px-14 lg:px-20 py-20 md:py-24 flex flex-col justify-center">

        <div className="flex items-start justify-between gap-6 mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Avocet Mobile
          </h1>

          <span className="text-lg md:text-2xl text-white/70 whitespace-nowrap">
            Case Study
          </span>
        </div>


        {/* Background & Context */}
        <CaseStudyHeading title="Background & Context" />

        <ul className="space-y-4 text-lg md:text-2xl text-white/90 leading-relaxed max-w-7xl list-disc pl-7">
          <li>
            Oil wells run 24×7 and require continuous monitoring to maintain
            maximum production and well health.
          </li>

          <li>
            Operators collect daily data such as pressure, temperature and
            flow to identify issues early and avoid production loss.
          </li>

          <li>
            While monitoring a single well is manageable, in reality operators
            handle multiple routes with thousands of wells.
          </li>

          <li>
            An existing mobile app was available, but it was basic and focused
            mainly on data entry without supporting real field challenges.
          </li>

          <li>
            This made the process inefficient and increased the risk of missed
            and inaccurate data.
          </li>
        </ul>

      </section>


      {/* =====================================================
          EXISTING APPLICATION FLOW
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <CaseStudyHeading title="Existing Application Flow" />

        <p className="text-lg md:text-2xl text-white/90 mb-14">
          The current mobile application is primarily designed as a data entry
          tool for field operators.
        </p>


        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Screenshot 1 */}
          <div className="flex justify-center">
            <Image
              src="/photo/avocet/1.png"
              alt="Existing Avocet application"
              width={500}
              height={900}
              className="max-h-[650px] w-auto object-contain"
            />
          </div>


          {/* Description */}
          <div className="space-y-6 text-lg md:text-xl text-white/85 leading-relaxed">

            <p>• Acts as the landing screen after login.</p>

            <p>• Provides access to primary sections of the application:</p>

            <ul className="space-y-3 pl-8 list-disc">
              <li>My Stops — well list and data collection</li>
              <li>Search — find wells or assets</li>
              <li>Settings — application preferences</li>
              <li>Help — support and documentation</li>
              <li>Sign out</li>
            </ul>

          </div>

        </div>


        {/* Second screenshot */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">

          <div className="space-y-6 text-lg md:text-xl text-white/85 leading-relaxed">

            <p>• My Stop section</p>

            <p>• Online / offline indicator</p>

            <p>• List of the stops / oil wells in the field</p>

          </div>

          <div className="flex justify-center">
            <Image
              src="/photo/avocet/2.png"
              alt="Avocet My Stops"
              width={500}
              height={900}
              className="max-h-[650px] w-auto object-contain"
            />
          </div>

        </div>

      </section>


      {/* =====================================================
          KEY GAPS
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <CaseStudyHeading title="Key Gaps" />

        <div className="grid md:grid-cols-2 gap-6">

          <GapCard
            number="1"
            title="No Visibility of Overall Work"
            points={[
              "No clear overview of total wells",
              "No visibility of completed vs pending tasks",
              "No visibility of daily progress",
            ]}
          />

          <GapCard
            number="2"
            title="Lack of Guidance for Next Action"
            points={[
              "No indication of which well to visit next",
              "No indication of what task to prioritize",
            ]}
          />

          <GapCard
            number="3"
            title="Menu-Driven, Non-Guided Experience"
            points={[
              "Users land on a menu screen after login",
              "No contextual information or starting point",
            ]}
          />

          <GapCard
            number="4"
            title="Limited Feedback & System Status Awareness"
            points={[
              "Online/offline status is not clearly integrated into the workflow",
              "No strong feedback after actions",
            ]}
          />

        </div>

      </section>


      {/* =====================================================
          USER INTERVIEWS
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <CaseStudyHeading title="2. User Interviews" />

        <div className="grid md:grid-cols-2 gap-6">

          <InterviewCard
            title="Background & Work Context"
            questions={[
              "Can you describe your daily workflow?",
              "How many wells do you typically handle in a day?",
              "What tools do you currently use for data collection?",
              "What kind of environment do you work in (network, conditions)?",
            ]}
          />

          <InterviewCard
            title="Workflow & Behavior"
            questions={[
              "How do you usually move from one well to another?",
              "How do you keep track of completed and pending wells?",
              "What steps do you follow to enter data?",
            ]}
          />

          <InterviewCard
            title="Pain Points & Challenges"
            questions={[
              "What is the most difficult part of your job?",
              "Where do you face delays or confusion?",
              "What mistakes happen most often?",
              "What frustrates you while using the current system?",
            ]}
          />

          <InterviewCard
            title="Expectations & Preferences"
            questions={[
              "What would make your work easier?",
              "What features would you like to have?",
              "How should the system guide you?",
              "Do you trust the data is saved?",
            ]}
          />

        </div>

      </section>


      {/* =====================================================
          USER PERSONA
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <CaseStudyHeading title="User Persona" />

        <div className="grid lg:grid-cols-[350px_1fr_1fr] gap-6">

          {/* Persona Profile */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">

            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-8">

              {/* Replace this image later */}
              <Image
                src="/photo/avocet/persona.png"
                alt="Field Operator"
                fill
                className="object-cover"
              />

            </div>

            <PersonaInfo label="Name" value="Adam Hornton" />
            <PersonaInfo label="Age" value="34" />
            <PersonaInfo label="Experience" value="7+ years" />
            <PersonaInfo label="Role" value="Field Operator" />
            <PersonaInfo label="Location" value="Remote Fields" />

          </div>


          {/* Background */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">

            <h3 className="text-2xl font-bold mb-4">
              Background
            </h3>

            <p className="text-white/80 leading-relaxed mb-8">
              Adam is responsible for visiting multiple wells daily to collect
              production data such as pressure, temperature, etc. His work
              directly impacts well performance and production efficiency.
            </p>


            <h3 className="text-xl font-bold mb-3">
              Goals
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Complete daily route efficiently</li>
              <li>Collect accurate data from each well</li>
              <li>Identify issues early to avoid production loss</li>
              <li>Ensure data is properly saved and reported</li>
            </ul>


            <h3 className="text-xl font-bold mt-8 mb-3">
              Pain Points
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Cannot easily track which wells are completed or pending</li>
              <li>Relies on memory to manage tasks and progress</li>
              <li>No guidance on what to do next or prioritize</li>
              <li>Data entry feels repetitive and time-consuming</li>
              <li>No confidence in data accuracy due to lack of context</li>
              <li>Uncertainty about data sync in offline conditions</li>
            </ul>

          </div>


          {/* Behavior */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">

            <h3 className="text-2xl font-bold mb-4">
              Behavior & Workflow
            </h3>

            <p className="text-white/80 leading-relaxed mb-4">
              Works in a sequential flow:
            </p>

            <p className="text-white/80 mb-2">
              Visit well → Check readings → Enter data → Next well
            </p>

            <p className="text-white/80 mb-2">
              Prefers simple, fast interactions.
            </p>

            <p className="text-white/80">
              Avoids complex navigation due to time constraints.
            </p>


            <h3 className="text-xl font-bold mt-8 mb-3">
              Needs
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Clear visibility of daily workload and progress</li>
              <li>Guidance on next steps and priorities</li>
              <li>Faster and simpler data entry</li>
              <li>Confidence that data is correct and saved</li>
              <li>Reliable experience in offline conditions</li>
            </ul>


            <h3 className="text-xl font-bold mt-8 mb-3">
              Key Insight
            </h3>

            <p className="text-white/80 leading-relaxed">
              Adam does not need more features — he needs a system that reduces
              effort, guides his workflow, and builds confidence in his daily
              operations.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          EMPATHY MAP
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <CaseStudyHeading title="Empathy Map" />

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          <EmpathyCard
            title="Says"
            items={[
              "I have to visit many wells every day.",
              "I'm not sure which wells are still pending.",
              "There's no easy way to check if my data is correct.",
              "I just follow the list and complete one by one.",
            ]}
          />

          <EmpathyCard
            title="Thinks"
            items={[
              "Am I missing any wells?",
              "Are these readings accurate?",
              "Did my data get saved properly?",
              "Which well should I visit next?",
            ]}
          />

          <EmpathyCard
            title="Does"
            items={[
              "Visits wells sequentially based on route",
              "Manually enters data for each well",
              "Navigates through multiple screens repeatedly",
              "Relies on memory to track progress and tasks",
            ]}
          />

          <EmpathyCard
            title="Feels"
            items={[
              "Overwhelmed due to multiple tasks",
              "Uncertain about data accuracy",
              "Frustrated with repetitive workflow",
              "Lacks confidence in system reliability, especially offline",
            ]}
          />

        </div>

      </section>


      {/* =====================================================
          ADD YOUR NEXT SECTIONS HERE
      ====================================================== */}

      <section className="px-6 md:px-14 lg:px-20 py-32">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#ff6b1a] uppercase tracking-[0.3em] text-xs mb-4">
            Next
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Define the Problem
          </h2>

          <p className="text-white/50 text-lg">
            Add your remaining case-study sections here.
          </p>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function CaseStudyHeading({ title }) {
  return (
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-300 mb-10 tracking-tight">
      {title}
    </h2>
  );
}


function GapCard({ number, title, points }) {
  return (
    <div className="min-h-[260px] rounded-xl border border-white/20 bg-white/10 p-7 md:p-9">

      <h3 className="text-xl md:text-2xl font-medium mb-6">
        {number}. {title}
      </h3>

      <ul className="space-y-3 list-disc pl-6 text-white/80 text-base md:text-lg">
        {points.map((point, index) => (
          <li key={index}>
            {point}
          </li>
        ))}
      </ul>

    </div>
  );
}


function InterviewCard({ title, questions }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-7 md:p-8">

      <h3 className="text-2xl font-bold mb-7">
        {title}
      </h3>

      <ol className="space-y-4 list-decimal pl-6 text-white/85 text-lg">
        {questions.map((question, index) => (
          <li key={index}>
            {question}
          </li>
        ))}
      </ol>

    </div>
  );
}


function PersonaInfo({ label, value }) {
  return (
    <div className="flex gap-4 mb-5 text-lg">
      <span className="font-bold min-w-[100px]">
        {label}
      </span>

      <span className="text-white/70">
        : {value}
      </span>
    </div>
  );
}


function EmpathyCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-7 md:p-9">

      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        {title}
      </h3>

      <div className="space-y-4">

        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-white/10 border border-white/10 p-5 text-white/80 leading-relaxed"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}