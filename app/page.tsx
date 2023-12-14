import Hero from "@/components/hero";
import Latest from "@/components/latest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Latest />
    </main>
  );
}
