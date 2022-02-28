import Brand from "./Brand";
import Links from "./Links";
import Icons from "./Icons";

export default function Navbar({ setOpenDialog }) {
  return (
    <div className="bg-white h-20 flex  justify-center fixed left-0 right-0 top-0 z-10">
      <div className="w-fw mx-auto flex justify-between items-center bg-white">
        <Brand />
        <Links />
        <Icons setLoginDialog={setOpenDialog} />
      </div>
    </div>
  );
}
