"use client";

import Image from "next/image";
import Cursor from "@/components/Cursor";

export default function AvocetMobile() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white"
  style={{
    background: `
      radial-gradient(circle at 10% 20%, #243f52 0%, transparent 35%),
      radial-gradient(circle at 85% 15%, #35152f 0%, transparent 40%),
      radial-gradient(circle at 50% 80%, rgb(85, 34, 117) 0%, transparent 45%),
      linear-gradient(135deg, #1d2e3d 0%, #3e2a4b 50%, #612f72 100%)
    `,
  }}>

    <Cursor />

         

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="min-h-[70vh] px-6 md:px-14 lg:px-20 py-28 flex flex-col justify-center">

        <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-5 font-medium">
          Enterprise Mobile Operations & Data Collection Platform
        </p>

        <h1
          className="font-black tracking-tighter leading-[0.9]"
          style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
        >
          Avocet Mobile
        </h1>
      </section>


      {/* =====================================================
          BACKGROUND & CONTEXT
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Background & Context" />

        <div className="max-w-5xl">

          <ul className="mt-6 space-y-3 text-base md:text-lg text-white/90 leading-relaxed list-disc list-inside">
            <li>Oil wells run 24×7 and require continuous monitoring to maintain maximum production and well health.</li>
            <li> Operators collect daily data (pressure, temperature, flow) to identify issues early and avoid production loss.</li>
            <li> While monitoring a single well is manageable, in reality operators handle multiple routes with thousands of wells.</li>
            <li>An existing mobile app was available, but it was basic and focused only on data entry, without supporting real field challenges.</li>
            <li> This made the process inefficient and increased the risk of missed and inaccurate data.</li>
          </ul>

        </div>

      </section>


      {/* =====================================================
          Problem Statement
      ====================================================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Problem Statement" />

          <div className="max-w-5xl">
              <ul className="mt-6 space-y-3 text-base md:text-lg text-white/90 leading-relaxed list-disc list-inside">
                <li>Field operators are responsible for monitoring and collecting data 
                  from thousands of oil wells daily to maintain production and well health.
                  However, existing tools focus only on basic data entry and lack visibility, 
                  guidance, and reliability in real field conditions. This results in inefficient workflows, increased cognitive load, and a higher risk of errors and missed operational issues.</li>
              </ul>
            </div>
      </section>

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Existing Application Flow" />

        <p className="max-w-4xl text-base md:text-lg text-white/90 leading-relaxed mb-14">
          The current mobile application is primarily designed as a data entry tool for field operators.
        </p>

        {/* Existing application screens */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 items-start">

          {/* Screen 01 */}
          <div className="flex justify-center">
            <img
              src="/photo/avocet-mob/Existing01.png"
              alt="My Stops screen"
              className="w-[170px] md:w-[210px] h-auto border border-white/10"
            />
          </div>

          {/* Screen 01 Content */}
          <div className="pt-2">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Acts as the landing screen after login.</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>
                  Provides access to primary sections of the application:
                </span>
              </li>

              <li className="pl-6 text-white/90">
                My Stops — Well list and data collection
              </li>

              <li className="pl-6 text-white/90">
                Search — Find wells or assets
              </li>

              <li className="pl-6 text-white/90">
                Settings — Application preferences
              </li>

              <li className="pl-6 text-white/90">
                Help — Support and documentation
              </li>

            </ul>
          </div>


          {/* Screen 02 */}
          <div className="flex justify-center">
            <img
              src="/photo/avocet-mob/Existing02.png"
              alt="My Stops screen"
              className="w-[170px] md:w-[210px] h-auto border border-white/10"
            />
          </div>

          {/* Screen 02 Content */}
          <div className="pt-2">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>My Stops section displays assigned field locations.</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Shows online and offline connection status.</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Provides a list of stops or oil well fields.</span>
              </li>

            </ul>
          </div>

        </div>

      </section>



      {/* ======================== Existing Application Flow 2 ======================== */}


      <section className="px-6 md:px-14 lg:px-20 py-24">

       

        {/* Existing application screens */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 items-start">

          {/* Screen 01 */}
          <div className="flex justify-center">
            <img
              src="/photo/avocet-mob/Existing03.png"
              alt="My Stops screen"
              className="w-[170px] md:w-[210px] h-auto border border-white/10"
            />
          </div>

          {/* Screen 01 Content */}
          <div className="pt-2">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Displays the selected route and date (e.g., Big Spring 17B)</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>
                  Shows the list of wells under the selected stop, each with:
                </span>
              </li>

              <li className="pl-6 text-white/90">
                Well ID (e.g., W981-SM)
              </li>

              <li className="pl-6 text-white/90">
                Record status (e.g., No Records Created / count)
              </li>
            </ul>
          </div>


          {/* Screen 02 */}
          <div className="flex justify-center">
            <img
              src="/photo/avocet-mob/Existing04.png"
              alt="My Stops screen"
              className="w-[170px] md:w-[210px] h-auto border border-white/10"
            />
          </div>

          {/* Screen 02 Content */}
          <div className="pt-2">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Displays detailed data entry fields for a selected well (e.g., W981-SM)</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Captures multiple types of readings</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>List of the stops (oil wells)</span>
              </li>

            </ul>
          </div>
        </div>
      </section>

      {/* ======================== Key Gaps ======================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Key Gaps" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              1. No Visibility of Overall Work
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>
                No clear overview of:
                <ul className="mt-3 space-y-2 list-disc pl-6">
                  <li>Total wells</li>
                  <li>Completed vs pending tasks</li>
                  <li>Daily progress</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              2. Lack of Guidance for Next Action
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>
                No indication of:
                <ul className="mt-3 space-y-2 list-disc pl-6">
                  <li>Which well to visit next</li>
                  <li>What task to prioritize</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              3. Menu-Driven, Non-Guided Experience
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>Users land on a menu screen after login</li>
              <li>No contextual information or starting point</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              4. Limited Feedback & System Status Awareness
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>Online/offline status is not clearly integrated into workflow</li>
              <li>No strong feedback after actions</li>
            </ul>
          </div>

        </div>

      </section>

        {/* ======================== Goals and Objective ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Goals and Objective" />

          <div className="max-w-5xl">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Improve visibility of work</span>
              </li>

              <li className="pl-6 text-white/90">
               → Well ID (e.g., W981-SM)
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Reduce cognitive load during operations</span>
              </li>

              <li className="pl-6 text-white/90">
                → Simplify workflows and minimize mental effort in data entry
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Guide users with clear next actions</span>
              </li>

              <li className="pl-6 text-white/90">
                 → Reduce decision-making effort by indicating what to do next
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Improve data accuracy and confidence</span>
              </li>

              <li className="pl-6 text-white/90">
                 → Provide better structure, feedback, and context during data entry
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Ensure reliability in offline conditions</span>
              </li>

              <li className="pl-6 text-white/90">
                  → Make data saving and sync status clear and trustworthy
              </li>

            </ul>
            
          </div>
      </section>

      

      {/* ======================== My Role and Responsibility ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="My Role and Responsibility" />

          <div className="max-w-5xl">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Analyzed the existing system</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Identified user problems</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Defined design direction</span>
              </li>

              

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Designed key product flows</span>
              </li>

              

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Improved information architecture</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Created wireframes and high-fidelity designs</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Focused on real-world usability</span>
              </li>

            </ul>
            
          </div>
      </section>



      {/* ======================== Research Process ======================== */}
      {/* ======================== Real World Scenario ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Research Process"/>

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          1. Simulating a Real-World Scenario
        </h2>
        <p>I recreated a typical field scenario</p> <br />

          <div className="max-w-5xl">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

               <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Operator has multiple wells in a route</span>
              </li>
              <li className="pl-6 text-white/90">
                 → Needs to visit each well sequentially.
              </li>
              <li className="pl-6 text-white/90">
                 → Collect and enter data for each asset.
              </li>

              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Then I walked through the app as if I were the operator:</span>
              </li>
              <li className="pl-6 text-white/90">
                 → Moving from one well to another
              </li>
              <li className="pl-6 text-white/90">
                 → Repeating the same actions.
              </li>
              <li className="pl-6 text-white/90">
                 → Switching between screens.
              </li>
              <li className="pl-6 text-white/90">
                 → Check for the data sync.
              </li>
              <li className="pl-6 text-white/90">
                 → Check for the next well.
              </li>
            </ul>
          </div>
      </section>





      {/* ======================== User Interview ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          2. User Interview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              1. Background & Work Context.
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>
                Can you describe your daily workflow?
              </li>
              <li>
                How many wells do you typically handle in a day?
              </li>
              <li>
                What tools do you currently use for data collection?
              </li>
              <li>
                What kind of environment do you work in (network, conditions)?
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              2. Workflow & Behavior
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>
                How do you usually move from one well to another?
              </li>
              <li>
                How do you keep track of completed and pending wells?
              </li>
              <li>
                 What steps do you follow to enter data?
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              3. Pain Points & Challenges
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>What is the most difficult part of your job?</li>
              <li> Where do you face delays or confusion?</li>
              <li> What mistakes happen most often?</li>
              <li> What frustrates you while using the current system?</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              4. Expectations & Preferences
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>What would make your work easier?</li>
              <li>What features would you like to have?</li>
              <li>How should the system guide you?</li>
              <li>Do you trust the data is saved?</li>
            </ul>
          </div>
          
        </div>
      </section>


      {/* ======================== Information Architecture - Diagram ======================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <h3 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
              3. Information Architecture - Diagram
        </h3>

        <p className="max-w-4xl text-lg md:text-xl text-white/60 leading-relaxed mb-12">
          The redesigned user flow creates a clearer path for field operators,
          helping them understand priorities and complete tasks efficiently.
        </p>

        <div className="p-4 md:p-8">
          <img
            src="/photo/avocet-mob/AvocetMobArchi.svg"
            alt="Avocet Mobile user flow"
            className="w-full h-auto"
          />
        </div>
      </section>


      {/* ======================== Heuristic Evaluation ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          4. Heuristic Evaluation
        </h2>
        <h4>Objective</h4>
        <p>To evaluate the usability of the existing system using established usability principles and identify issues affecting efficiency, clarity, and user confidence in real field conditions.</p> <br />

          <div className="max-w-5xl">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">

               <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Heuristics Applied</span>
              </li>
              <li className="pl-6 text-white/90"> →  Visibility of system status </li>
              <li className="pl-6 text-white/90"> →  Match between system and real-world workflow </li>
              <li className="pl-6 text-white/90"> →   User control and freedom </li>
              <li className="pl-6 text-white/90"> →  Error prevention </li>
              <li className="pl-6 text-white/90"> →  Over recall </li>
              <li className="pl-6 text-white/90"> →   Flexibility and efficiency of use </li>
            </ul>
          </div>
      </section>


      {/* ======================== Issues Identified ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          5. Issues Identified
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              1. Poor Visibility of System Status
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>Overall progress</li>
              <li> Completed vs pending wells</li>
              <li>Sync status clarity</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              2.  Inefficient Navigation & Repetitive Actions
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>Multiple steps to perform similar tasks</li>
              <li> Deep navigation hierarchy</li>
              <li>Slows down workflow, especially with many wells</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              3. Limited Error Prevention
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>No validation or contextual support</li>
              <li> No guidance for incorrect inputs</li>
              <li> Users can easily make mistakes without noticing</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl text-white/90 font-medium mb-4">
              4. Lack of Flexibility & Efficiency
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-white/75 leading-relaxed list-disc pl-6">
              <li>No shortcuts or quick actions</li>
              <li> No prioritization or guidance</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ======================== Key Insight ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          6. Key Insights
        </h2>
          <div className="max-w-5xl">
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Lack of visibility across workflow</span>
              </li>
              <li className="pl-6 text-white/90"> → Operators cannot easily track total wells, progress, or pending tasks </li>
            </ul>
            <br />
            
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#ff6b1a]">•</span>
                <span>Users rely heavily on memory</span>
              </li>
              <li className="pl-6 text-white/90"> 
                 →  Due to absence of system guidance, operators mentally track:
                <ul className="mt-3 space-y-2 list-disc pl-6">
                  <li> Completed wells</li>
                  <li>Next Steps</li>
                  <li> Previous values </li>
                </ul>
              </li>

              <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#ff6b1a]">•</span>
                  <span>No guidance for task prioritization</span>
                </li>
                <li className="pl-6 text-white/90"> →  All wells and tasks appear equal, increasing decision effort </li>
              </ul>

              <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#ff6b1a]">•</span>
                  <span>High cognitive load during data entry</span>
                </li>
                <li className="pl-6 text-white/90"> →   Large number of inputs without context or assistance </li>
              </ul>

              <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#ff6b1a]">•</span>
                  <span>Data entry lacks validation and confidence</span>
                </li>
                <li className="pl-6 text-white/90"> → No reference to historical data or expected ranges </li>
              </ul>

              <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#ff6b1a]">•</span>
                  <span>Workflow is fragmented and screen-driven</span>
                </li>
                <li className="pl-6 text-white/90"> →  System structure does not align with real-world task flow </li>
              </ul>

               <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#ff6b1a]">•</span>
                  <span>Lack of system feedback and trust</span>
                </li>
                <li className="pl-6 text-white/90"> → Unclear data save and sync status, especially in offline mode </li>
              </ul>

            </ul>
          </div>
      </section>


      {/* ======================== User Persona ======================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

         <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          7. User Persona
        </h2>
        <div className="p-4 md:p-8">
          <img
            src="/photo/avocet-mob/UserPersona.svg"
            alt="Avocet Mobile user flow"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ======================== Empathy Map ======================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          8. Empathy Map
        </h2>
        <div className="p-4 md:p-8">
          <img
            src="/photo/avocet-mob/EmpathyMap.svg"
            alt="Avocet Mobile user flow"
            className="w-full h-auto"
          />
        </div>
      </section>


      {/* ======================== Design Principal ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <h2 className="text-2xl md:text-3xl font-medium text-white/90 mt-8 mb-6">
          9.Design Principal
        </h2>
        <p>Based on the insights and user understanding, I defined the following design principles to guide all design decisions.</p>
        <br />

          <div className="max-w-5xl">
            
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">1. Make Work Visible</h3>
              <li className="pl-6 text-white/90"> → Operators should always know what they have to do and what is completed. </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">2. Guide the Next Action</h3>
              <li className="pl-6 text-white/90"> → Reduce the need for users to think “what should I do next? </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">3. Build Confidence in Data</h3>
              <li className="pl-6 text-white/90"> → Users should feel confident that their data is correct and safely stored. </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">4. Reduce Cognitive Load</h3>
              <li className="pl-6 text-white/90"> → Minimize mental effort during data entry and navigation. </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">5. Design for Real Field Conditions</h3>
              <li className="pl-6 text-white/90"> → Users should feel confident that their data is correct and safely stored. </li>
            </ul>
            
          </div>
      </section>


      {/* ======================== Ideation & Early Exploration ======================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Ideation & Early Exploration" />
        <div className="p-4 md:p-8">
          <img
            src="/photo/avocet-mob/Ideation.png"
            alt="Avocet Mobile user flow"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ======================== Final Design ======================== */}
      <section className="px-6 md:px-14 lg:px-20 py-24">
        <SectionTitle title="Final Design" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              1. Dashboard
            </h2>

            <ul className="space-y-4 text-base md:text-xl text-white/75 leading-relaxed">
              <li>• Work Overview → Shows route, wells, and completion status</li>
              <li>• Progress Tracking → Visualizes completed vs pending wells</li>
              <li>• Route Map → Helps plan movement across wells</li>
              <li>• Next Well Guidance → Suggests next action with navigation</li>
              <li>• Sync Status → Provides clear offline and data status</li>
              <li>• Performance Insight → Shows average time for awareness</li>
              <li>• Prototype : <a href=""></a></li>
            </ul>
          </div>

          {/* Right Screens */}
          <div className="order-1 lg:order-2 flex justify-center gap-4 md:gap-6">
            <img
              src="/photo/avocet-mob/Dashboard01.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />

            <img
              src="/photo/avocet-mob/Dashboard02.png"
              alt="Avocet Mobile Route View"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ========== Menu-Utility and Settings ========== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              2. Menu – Utility & Settings
            </h2>

            <ul className="space-y-4 text-base md:text-xl text-white/75 leading-relaxed">
              <li>• Quick Actions → Enables offline work, route switching, and issue reporting</li>
              <li>• Accessibility Controls → Adjusts text size, contrast, and touch for field usability</li>
              <li>• Theme Options → Supports dark mode for different environments</li>
              <li>• Help & Support → Provides quick access to FAQs and app information</li>
              <li>• Account Access → Allows secure logout</li>
            </ul>
          </div>

          {/* Right Screens */}
          <div className="order-1 lg:order-2 flex justify-center gap-4 md:gap-6">
            <img
              src="/photo/avocet-mob/Menu.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ========== My Stops ========== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              3. My Stops
            </h2>

            <ul className="space-y-4 text-base md:text-xl text-white/75 leading-relaxed">
              <li>• Route Progress Overview → Shows completion status and well sequence for quick tracking</li>
              <li>• Structured Route List → Organizes multiple routes for easy navigation</li>
              <li>• Well-Level Visibility → Displays wells with status indicators for clarity</li>
              <li>• Quick Actions per Well → Enables fast access to data, photos, and updates</li>
              <li>• Daily Production Summary → Provides oil and gas output for quick reference</li>
            </ul>
          </div>

          {/* Right Screens */}
          <div className="order-1 lg:order-2 flex justify-center gap-4 md:gap-6">
            <img
              src="/photo/avocet-mob/MyStops01.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />

            <img
              src="/photo/avocet-mob/MyStops02.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ========== Maps and Global Search ========== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              4. Maps and Global Search
            </h2>

            <ul className="space-y-4 text-base md:text-xl text-white/75 leading-relaxed">
              <li>• Map View → Visualizes well locations for easy navigation</li>
              <li>• Current Location Context → Helps operators understand position relative to wells</li>
              <li>• Global Search → Enables quick search across wells, routes, and data</li>
              <li>• Recent Searches → Provides faster access to frequently visited wells</li>
              <li>• Voice Input Support → Allows quick search in field conditions</li>
            </ul>
          </div>

          {/* Right Screens */}
          <div className="order-1 lg:order-2 flex justify-center gap-4 md:gap-6">
            <img
              src="/photo/avocet-mob/Map.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />

            <img
              src="/photo/avocet-mob/Search.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ==========  Access & Insights ========== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              5. Access & Insights
            </h2>

            <ul className="space-y-4 text-base md:text-xl text-white/75 leading-relaxed">
              <li>• Seamless Access → Quick login with offline support for uninterrupted field work</li>
              <li>• Field-Ready Controls → Options like save session, cache reload, and server config for reliability</li>
              <li>• Data Visualization → Clear trends for pressure and temperature to simplify understanding</li>
              <li>• Informed Decisions → Historical insights help identify issues and improve well performance</li>
            </ul>
          </div>

          {/* Right Screens */}
          <div className="order-1 lg:order-2 flex justify-center gap-4 md:gap-6">
            <img
              src="/photo/avocet-mob/Login.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />

            <img
              src="/photo/avocet-mob/Trend.png"
              alt="Avocet Mobile Dashboard"
              className="w-[42%] max-w-[280px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ======================== Impact / Outcome ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-24">

        <SectionTitle title="Impact / Outcome" />
        <p>The redesigned experience significantly improved how field operators manage their daily workflow.</p>
        <br />

          <div className="max-w-5xl">
            
            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">1. Reduced cognitive load</h3>
              <li className="pl-6 text-white/90"> →  By introducing clear progress tracking, structured navigation, and guided actions, operators no longer rely on memory to manage wells and tasks. </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">2. Improved efficiency and speed</h3>
              <li className="pl-6 text-white/90"> → Streamlined workflows and reduced navigation steps enabled operators to complete tasks faster and with less effort across multiple wells. </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">3. Increased confidence in data</h3>
              <li className="pl-6 text-white/90"> → With better visibility of sync status, contextual inputs, and historical trends, users gained more trust in the accuracy of their data. </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">4. Better decision-making</h3>
              <li className="pl-6 text-white/90"> →  Visual insights and performance indicators helped operators quickly identify abnormalities and take timely actions. </li>
            </ul>
            <br />

            <ul className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed">
              <h3 className="text-xl md:text-1xl text-white/90 font-medium mb-4">5. Enhanced usability in real field conditions</h3>
              <li className="pl-6 text-white/90"> → Offline support, accessibility features, and simplified interactions made the application more reliable and practical for on-ground usage. </li>
            </ul>
          </div>
      </section>

      {/* ======================== Impact / Outcome ======================== */}

      <section className="px-6 md:px-14 lg:px-20 py-32 border-t border-white/10">
        <div className="max-w-4xl">

          <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-5">
            Avocet Mobile 
          </p>

          <h2
            className="font-black tracking-tighter leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            End of Case Study.
          </h2>
          <h3>Thank you !</h3>
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