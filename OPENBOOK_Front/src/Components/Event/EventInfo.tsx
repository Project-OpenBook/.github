import { Event } from "./EventDetail";

const EVENT_INFO = "w-full border-b border-blue-300 text-sm";

interface Props {
  mainImageUrl: string;
  location: string;
  description: string;
  openDate: string;
  closeDate: string;
}

export default function EventInfo({
  mainImageUrl,
  closeDate,
  description,
  location,
  openDate,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-7 w-full">
      <img
        src={mainImageUrl}
        alt="행사 이미지"
        className="w-full md:w-1/3 rounded-md object-cover aspect-square border"
      />
      <div className="flex flex-col flex-1 gap-2">
        <div className={EVENT_INFO}>행사 위치 : {location}</div>
        <div className={EVENT_INFO}>
          행사 운영 기간: {`${openDate} ~ ${closeDate}`}
        </div>
        <div className="border border-blue-300 rounded-md h-full p-2 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
}
