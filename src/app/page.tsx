
import Hero from "./components/hero";
import Tips from "./components/tips";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero data={1} />
      <Tips currentId={0} rand={false} showInactive={true} />
      <Newsletter />
      <Footer />
    </main>
  );
}
