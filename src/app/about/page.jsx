import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";



export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
