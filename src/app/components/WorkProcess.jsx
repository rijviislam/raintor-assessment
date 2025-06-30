import ArrowBlack from "../../../public/assets/right-arrow-black.svg";
import Arrow from "../../../public/assets/right-arrow.svg";
import Cta from "../share/Cta";
import WorkCard from "../share/WorkCard";

export default function WorkProcess() {
  return (
    <section id="workProcess" className="flex justify-center ">
      <div
        className="relative bg-[#141414] rounded-[40px] min-h-[866px]
   max-w-[1410px] px-5 lg:px-[65px] pt-[90px]"
      >
        <div className="flex flex-col md:flex-row gap-[97px] items-center">
          <Cta btnTitle={" Why Choose me"} />
          <h2 className="text-[#FFFFFF] text-[58px] text-center font-bold leading-[86px]">
            My Work Process
          </h2>
        </div>
        <div className="flex flex-wrap lg:items-start lg:justify-start items-center justify-center gap-[10px] mt-[50px]">
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
    </section>
  );
}
