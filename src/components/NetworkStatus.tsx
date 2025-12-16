export default function NetworkStatus() {
  return (
    <div className="w-full px-2 flex flex-col text-primary gap-1">
      <div className="flex justify-between items-center -translate-y-1">
        <p>NETWORK STATUS</p>
        <p className="text-border text-sm">interface: turn0</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <p className="text-border">STATE</p>
          <p className="-translate-y-2 text-xl">ONLINE</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-border">IPv4</p>
          <p className="-translate-y-2 text-xl">192.187.144.69</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-border">PING</p>
          <p className="-translate-y-2 text-xl">22ms</p>
        </div>
      </div>
    </div>
  );
}
