export default function Memory() {
  return (
    <>
      <div className="flex justify-between px-2">
        <p className="text-primary">MEMORY</p>
        <p className="text-sm text-border">USING 6.9 OUT OF 32 GiB</p>
      </div>
      <div className="flex gap-2 px-2 items-center">
        <p className="text-primary">SWAP</p>
        <div className="border-r flex border-primary flex-col h-2 flex-1 ">
          <div className="h-1 w-[5%] bg-primary" />
          <div className="h-1 w-full bg-border" />
        </div>
        <p className="text-border text-sm">1.8 Gib</p>
      </div>
    </>
  );
}
