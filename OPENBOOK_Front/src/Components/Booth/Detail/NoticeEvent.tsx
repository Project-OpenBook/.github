import { FaStar } from "react-icons/fa";
import { MdOutlineAnnouncement } from "react-icons/md";

interface Props {
  type: "notice" | "event";
  text: string;
}

export default function NoticeEvent({ text, type }: Props) {
  return (
    <div className="flex gap-2 items-center">
      {type === "notice" ? (
        <MdOutlineAnnouncement size={25} color="#0064FF" />
      ) : (
        <FaStar size={25} color="#0064FF" />
      )}
      <div className="border-b-[#0064FF] border-b-2 w-full pb-1 cursor-pointer">
        {text}
      </div>
    </div>
  );
}
