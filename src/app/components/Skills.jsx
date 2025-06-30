import Image from "next/image";
import SliderBtn from "../../../public/assets/Group 15.svg";
import Img from "../../../public/assets/Group 17.svg";
import Card from "../share/Card";
import Cta from "../share/Cta";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center w-full lg:top-0 top-16 relative z-50"
    >
      <div className="bg-[#000000] rounded-[40px] max-w-[1410px] px-8 md:px-[65px] pt-[70px]">
        <Cta btnTitle={"Why Choose me"} />

        <div className="flex md:flex-row flex-col items-center justify-center md:gap-[254px] gap-10 md:justify-between mt-10">
          <h2 className="text-[#FFFFFF] text-[58px] text-center md:text-start font-bold leading-[86px]">
            My Extensive <br /> List of Skills
          </h2>
          <div className="flex flex-col gap-5 items-center md:items-end">
            <p className="text-[#FFFFFF] font-normal text-[18px] leading-[34px] text-center md:text-end">
              Building the worlds best marketing Your <br /> trusted partner for
              strategy, design, and dev.
            </p>
            <span className="w-[491px] xl:block hidden mt-[21px] mb-[35px] opacity-[0.4px] h-[1px] bg-[#FFF]"></span>
            <button className="cursor-pointer">
              <Image src={SliderBtn} width={140} height={60} alt="Slider Btn" />
            </button>
          </div>
        </div>

        <div className="flex xl:flex-nowrap items-center justify-center flex-wrap gap-[10px] mt-10">
          <Card
            img={Img}
            title={"HTML & CSS"}
            para={
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
            }
          />
          <Card
            img={Img}
            title={"Javascript"}
            para={
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
            }
            className="rotate"
          />
          <Card
            img={Img}
            title={"Webflow"}
            para={
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
            }
          />
        </div>
      </div>
    </section>
  );
}
