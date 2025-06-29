import Image from "next/image";
import AboutImg from "../../../public/assets/about-img.svg";
import DownArrow from "../../../public/assets/down-arrow-2.svg";
import Img3 from "../../../public/assets/v1.svg";
import Img5 from "../../../public/assets/v2.svg";
import Img6 from "../../../public/assets/v3.svg";
import Img1 from "../../../public/assets/Vector (1) 2.svg";
import Img2 from "../../../public/assets/Vector (2) 2.svg";
import Img4 from "../../../public/assets/Vector (4).svg";

export default function About() {
  return (
    <div className="h-[828px] w-full relative ">
      <Image
        src={AboutImg}
        alt="About Img"
        className="h-[673px] absolute w-full object-cover top-0  left-0 z-0"
      />

      <div className="flex flex-col items-center relative top-[130px] z-50 ">
        <div className="flex items-end justify-end w-full relative right-[192px] z-50  mb-[34px]">
          <button className="border-2 border-[#000] rounded-[22px] w-11 h-11 flex items-center justify-center">
            <Image src={DownArrow} width={12} height={12} alt="Arrow" />
          </button>
          <button className="border-2 border-[#000] rounded-[40px] px-5 py-[10px] text-[#000] text-[16px] font-normal leading-[20px]">
            About
          </button>
        </div>
        <h2 className="text-[78px] font-bold leading-[126px] ">
          I’ve been{" "}
          <span className="bg-[#000] text-white h-[105px] w-[572px] rounded-[11px]">
            Developing
          </span>{" "}
          <br /> Websites since{" "}
          <span className="bg-[#000] text-white h-[105px] w-[281px] rounded-[11px]">
            2013
          </span>
        </h2>
        <p className="max-w-[921px] text-center text-[18px] font-normal mt-[15px]">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
        <div className=" w-full pl-[105px] mt-[70px] gap-[33px] flex justify-end">
          <h3 className="text-[#000] text-[26px] font-bold">
            PREVIOUSLY <br /> WORKED ON
          </h3>
          <div className="relative  w-[1068px] h-[217px]">
            <button className="border-2 border-[#000] rounded-[45px] bg-[#FFF] inline-flex py-[37px] px-[70px] cursor-grab absolute left-0 -bottom-[10px]">
              <Image src={Img1} width={135} height={15} alt="Img" />
            </button>
            <button className="border-2 border-[#000] rounded-[45px] bg-[#FFF] inline-flex py-[24px] px-[70px] cursor-grab absolute left-[314px] bottom-1 rotate-[-9.343deg]">
              <Image
                src={Img2}
                width={151}
                height={24}
                alt="Img"
                className="rotate-[9.34deg]"
              />
            </button>
            <button className="border-2 border-[#000] rounded-[45px] bg-[#FFF] inline-flex py-[37px] px-[70px] cursor-grab absolute right-[165px] -bottom-[10px]">
              <Image src={Img3} width={151} height={24} alt="Img" />
            </button>
            <button className="border-2 border-[#000] rounded-[45px] bg-[#FFF] inline-flex  px-[70px] py-[15px] cursor-grab absolute right-0 top-[54px] rotate-[16.97deg]">
              <Image
                src={Img4}
                width={151}
                height={24}
                alt="Img"
                className="rotate-[-16.97deg]"
              />
            </button>
            <button className="border-2 border-[#000] rounded-[45px] inline-flex  px-[70px] py-[18px] cursor-grab bg-[#000] absolute top-10 left-[68px] rotate-[11.97deg]">
              <Image
                src={Img5}
                width={151}
                height={24}
                alt="Img"
                className="rotate-[-11.97deg]"
              />
            </button>
            <button className="border-2 border-[#000] absolute right-[291px] top-4 rounded-[45px] inline-flex  px-[70px] py-[28px] cursor-grab bg-[#FFF]">
              <Image src={Img6} width={151} height={24} alt="Img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
