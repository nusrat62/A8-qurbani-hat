import TopGenerations from "@/components/TopGenerations";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Tips from "@/components/Tips";
import TopBreeds from "@/components/TopBreeds";

export default function Home() {
  return (
    <main className="space-y-24 bg-white">

      {/* HERO */}
      <section>
        <Banner />
      </section>

      {/* TOP GENERATIONS */}
      <section className="px-4 md:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <TopGenerations />
        </div>
      </section>

      {/* FEATURED ANIMALS */}
      <section className="px-4 md:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <Featured />
        </div>
      </section>

      {/* TIPS */}
      <section className="px-4 md:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <Tips />
        </div>
      </section>

      {/* TOP BREEDS */}
      <section className="px-4 md:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <TopBreeds />
        </div>
      </section>

      {/* SPACER */}
      <div className="h-16" />

    </main>
  );
}