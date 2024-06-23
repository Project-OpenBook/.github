import ServiceInfoInput from "./ServiceInfoInput";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { boothImageState } from "../../../../Recoil/Booth/boothRegistAtom";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

export default function ServiceInfoInputPage() {
  const setBoothImage = useSetRecoilState(boothImageState);
  const [imageName, setImageName] = useState("X");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setBoothImage(selectedFile);
      setImageName(selectedFile.name);
    } else {
      setBoothImage(null);
      setImageName("X");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-1/2 h-full justify-center items-center shadow-md border-b-2">
        <h1 className="font-bold text-3xl mb-5">서비스 등록</h1>
        <ServiceInfoInput
          Icon={MdDriveFileRenameOutline}
          label="서비스명"
          placeholder="서비스명을 입력해 주세요"
          setValue={() => {}}
          type="text"
        />
        <ServiceInfoInput
          Icon={MdOutlineDescription}
          label="서비스 설명"
          placeholder="서비스에 대한 간략한 설명을 입력해 주세요"
          setValue={() => {}}
          type="text"
        />
        <ServiceInfoInput
          Icon={IoIosPricetags}
          label="이용 가격(원)"
          placeholder="서비스의 이용 가격을 숫자로 입력해 주세요"
          setValue={() => {}}
          type="text"
        />
        <ServiceInfoInput
          Icon={FaClock}
          label="서비스 시간"
          placeholder="서비스를 이용할 수 있는 시간대를 선택해 주세요"
          setValue={() => {}}
          type="button"
        />
        <ServiceInfoInput
          Icon={FaRegImage}
          label="서비스 이미지"
          setValue={handleFileChange}
          type="image"
          imageName={imageName}
        />
        <div className="flex w-1/2 gap-4">
          <button className="py-1 font-bold w-full h-10 hover:cursor-pointer bg-[#0064FF] rounded-md text-white mb-4">
            서비스 등록
          </button>
          <button className="py-1 font-bold w-full h-10 hover:cursor-pointer bg-red-700 rounded-md text-white mb-4">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
