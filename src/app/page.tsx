
import Hero from "./components/hero";
import Tips from "./components/tips";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero data={1} />
      <Tips />
      <Newsletter />
      <Footer />
    </main>
  );
}
