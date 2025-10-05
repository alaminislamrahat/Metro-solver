import Hero from "./components/Hero";
import Service from "./components/Home/Service";
import Work from "./components/Home/Work";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Hero/>
      <Service/>
      <Work/>
    </div>
  );
}
