import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title: "Contact — Indrajeet Jadhav | Product Designer & UX Designer",

  description:
    "Get in touch with Indrajeet Jadhav for Product Design, UX Design, enterprise UX, and digital product design opportunities.",

  keywords: [
    "Indrajeet Jadhav",
    "Product Designer",
    "UX Designer",
    "Product Design",
    "Enterprise UX",
    "UX Portfolio",
  ],

  alternates: {
    canonical: "https://YOUR-DOMAIN.com/contact",
  },

  openGraph: {
    title: "Contact — Indrajeet Jadhav | Product Designer & UX Designer",
    description:
      "Contact Indrajeet Jadhav for Product Design and UX Design opportunities.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}