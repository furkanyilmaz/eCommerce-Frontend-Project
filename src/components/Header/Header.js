import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";

export default function Header() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <hr />
      <Slider />
    </div>
  );
}
