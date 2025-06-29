import ArrowBlack from "../../../public/assets/right-arrow-black.svg";
import Arrow from "../../../public/assets/right-arrow.svg";
import Cta from "../share/Cta";
import WorkCard from "../share/WorkCard";

export default function WorkProcess() {
  return (
    <div className="flex justify-center ">
      <div
        className="relative bg-[#141414] rounded-[40px] h-[866px]
   w-[1410px] px-[65px] pt-[90px]"
      >
        <div className="flex gap-[97px] items-center">
          <Cta btnTitle={" Why Choose me"} />
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
