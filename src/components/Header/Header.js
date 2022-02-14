import Navbar from "./Navbar/Navbar";
import Slider from "./Slider";
import Hero from "./Slider";

export default function Header() {
  return (
    <div className="bg-like-red h-s1 flex flex-col">
      <Navbar />
      <Slider />
    </div>
  );
}
