import bootMessages, { betterBootMessages } from "@/bootMesssages";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
interface IProp {
  setBoot: Dispatch<SetStateAction<boolean>>;
}
const betterBootMessagesList = betterBootMessages.split("\n");

export default function BootScreen({ setBoot }: IProp) {
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        betterBootMessagesList[index],
      ]);
      const div = document.getElementById("scrollend");
      div?.scrollIntoView();
      index = index + 1;
      if (index == betterBootMessagesList.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setBoot(true);
        }, 300);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {messages.map((msg, index) => {
        return (
          <div
            className={`flex ${index == 0 && "mt-auto"} text-sm text-[#aacfd1]`}
            key={index}
          >
            <p className="">{msg}</p>
          </div>
        );
      })}
      <div id="scrollend" className="mb-4" />
    </>
  );
}
