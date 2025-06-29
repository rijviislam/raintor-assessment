import Image from "next/image";
import DownArrow from "../../../public/assets/Frame.svg";
import ArrowBlack from "../../../public/assets/right-arrow-black.svg";
import Arrow from "../../../public/assets/right-arrow.svg";
import WorkCard from "./WorkCard";

export default function WorkProcess() {
  return (
    <div className="flex justify-center ">
      <div
        className="relative bg-[#141414] rounded-[40px] h-[866px]
   w-[1410px] px-[65px] pt-[90px]"
      >
        <div className="flex gap-[97px] items-center">
          <div className="inline-flex">
            <button className="border-2 border-[#FFF] rounded-[22px] w-11 h-11 inline-flex items-center justify-center">
              <Image src={DownArrow} width={12} height={12} alt="Arrow" />
            </button>
            <button className="border-2 border-[#FFF] rounded-[40px] px-5 py-[10px] text-[#FFF] text-[16px] font-normal leading-[20px] inline-flex">
              Why Choose me
            </button>
          </div>
          <h2 className="text-[#FFFFFF] text-[58px] font-bold leading-[86px]">
            My Work Process
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-[10px] mt-[50px]">
          <WorkCard
            button="Discovery"
            link="Read More"
            para={`We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.`}
            img={Arrow}
          />
          <WorkCard
            button="Discovery"
            link="Read More"
            para={`We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.`}
            className="rotate-two"
            img={ArrowBlack}
          />
          <WorkCard
            button="Discovery"
            link="Read More"
            para={`We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.`}
            img={Arrow}
          />
          <WorkCard
            button="Discovery"
            link="Read More"
            para={`We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.`}
            img={Arrow}
          />
        </div>
      </div>
    </div>
  );
}
