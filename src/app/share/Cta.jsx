import Image from "next/image";
import DownArrow from "../../../public/assets/Frame.svg";
export default function Cta({ btnTitle, className = "", img }) {
  return (
    <div className="flex">
      <button className="border-2 border-[#FFF] rounded-[22px] w-11 h-11 flex items-center justify-center">
        <Image src={DownArrow || img} width={12} height={12} alt="Arrow" />
      </button>
      <button
        className={`border-2 border-[#FFF] rounded-[40px] px-5 py-[10px] text-[#FFF] text-[16px] font-normal leading-[20px] ${className}`}
      >
        {btnTitle}
      </button>
    </div>
  );
}
