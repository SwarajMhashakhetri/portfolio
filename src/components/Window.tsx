interface IProp {
  children: React.ReactNode;
  title: string;
}
export default function Windown({ children, title }: IProp) {
  return (
    <div className="border flex flex-col w-full h-full">
      <div className="border-b">
        <p>{title}</p>
        <div></div>
      </div>
      {children}
    </div>
  );
}
