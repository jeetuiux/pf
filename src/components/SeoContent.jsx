export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">
        Indrajeet Jadhav — Product Designer & UX Designer
      </h1>

      <p itemProp="description">
        Indrajeet Jadhav is a Product Designer and UX Designer specializing
        in enterprise UX, product design, user research, interaction design,
        and creating intuitive digital experiences.
      </p>

      <p itemProp="jobTitle">
        Product Designer & UX Designer
      </p>

      <p itemProp="knowsAbout">
        Product Design, UX Design, User Research, Interaction Design,
        Information Architecture, Prototyping, Design Systems, Enterprise UX,
        Agile, Figma, React, Next.js, and AI-assisted design workflows.
      </p>

      <section aria-label="Selected Case Studies">
        <h2>Selected Product Design Case Studies</h2>
        <ul>
          <li>Avocet Mobile Application</li>
          <li>IFS Time Booking Application</li>
          <li>Avalon User Management</li>
          <li>Brix Application</li>
        </ul>
      </section>
    </div>
  );
}