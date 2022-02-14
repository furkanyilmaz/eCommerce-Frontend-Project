import Brand from "./Brand";
import Links from "./Links";
import Icons from "./Icons";

export default function Navbar() {
  return (
    <div className="bg-white h-20 flex justify-center">
      <div className="w-fw mx-auto flex justify-between items-center">
        <Brand />
        <Links />
        <Icons />
      </div>
    </div>
  );
}
