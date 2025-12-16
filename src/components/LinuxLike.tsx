import CoolComponent from "./CoolComponent";
import FileExplorere from "./FileExplorer";
import Network from "./Network";
import System from "./System";
import Terminal from "./Terminal";

export default function LinuxLike() {
  return (
    <div className="absolute inset-0 max-h-full overflow-hidden h-full w-full bg-[#0D1015] bg-[radial-gradient(#262828_1px,transparent_1px)] [background-size:16px_16px]  font-unitedSans">
      <div className="w-full h-full grid  grid-cols-5 grid-rows-3 gap-2  p-2 ">
        <div className="col-span-3 row-span-2 ">
          <Terminal />
        </div>
        <div className="col-span-1 row-span-2 ">
          <System />
        </div>
        <div className="col-span-1 row-span-2 ">
          <Network />
        </div>
        <div className="col-span-3 row-span-1 ">
          <FileExplorere />
        </div>
        <div className="col-span-2 row-span-1 ">
          <CoolComponent />
        </div>
      </div>
    </div>
  );
}
