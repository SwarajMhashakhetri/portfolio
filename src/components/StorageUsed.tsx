export default function StorageUsed() {
  return (
    <div className="flex justify-between text-primary mt-auto items-center">
      <p>
        Mount <span className="font-extrabold">/home/swaraj </span>used{" "}
        <span className="font-extrabold">69%</span> used
      </p>
      <div className="flex flex-col border-r border-primary h-4 w-[70%] ">
        <div className="w-[69%] bg-primary h-2" />
        <div className="w-full bg-border h-2" />
      </div>
    </div>
  );
}
