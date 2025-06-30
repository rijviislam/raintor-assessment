import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ button, link, para, className = "", img }) {
  return (
    <div
      className={`className bg-[#000000] rounded-[30px] p-[30px] flex flex-col gap-[45px] ${className} min-h-[280px] max-w-[635px]`}
    >
      <div className="flex justify-between items-center">
        {" "}
        <button className="bg-[#C5FFEE] px-[37px] pt-[5px] pb-[1px] rounded-[20px]">
          {button}
        </button>
        <Link
          href={"#"}
          className="flex items-center font-normal text-[16px] text-[#FFFFFF] underline leading-[18px] link gap-[9px]"
        >
          <Image src={img} alt="Arrow" />
          {link}
        </Link>
      </div>
      <p className="text-[#FFFFFF] opacity-[0.7px] font-normal text-[18px] leading-[33px]">
        {para}
      </p>
    </div>
  );
}
