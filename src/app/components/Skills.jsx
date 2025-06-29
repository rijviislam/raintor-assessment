import Image from "next/image";
import DownArrow from "../../../public/assets/Frame.svg";
import SliderBtn from "../../../public/assets/Group 15.svg";
import Img from "../../../public/assets/Group 17.svg";
import Cart from "./Cart";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full border-2 border-red-500">
      <div className="bg-[#000000] rounded-[40px] w-[1410px] px-[65px] pt-[70px]">
        <div className="flex">
          <button className="border-2 border-[#FFF] rounded-[22px] w-11 h-11 flex items-center justify-center">
            <Image src={DownArrow} width={12} height={12} alt="Arrow" />
          </button>
          <button className="border-2 border-[#FFF] rounded-[40px] px-5 py-[10px] text-[#FFF] text-[16px] font-normal leading-[20px]">
            Why Choose me
          </button>
        </div>

        <div className="flex gap-[254px] justify-between mt-10">
          <h2 className="text-[#FFFFFF] text-[58px] font-bold leading-[86px]">
            My Extensive <br /> List of Skills
          </h2>
          <div className="flex flex-col items-end">
            <p className="text-[#FFFFFF] font-normal text-[18px] leading-[34px] text-end">
              Building the worlds best marketing Your <br /> trusted partner for
              strategy, design, and dev.
            </p>
            <span className="w-[491px] mt-[21px] mb-[35px] opacity-[0.4px] h-[1px] bg-[#FFF]"></span>
            <button className="cursor-pointer">
              <Image src={SliderBtn} width={140} height={60} alt="Slider Btn" />
            </button>
          </div>
        </div>

        <div className="flex gap-[10px] mt-10">
          <Cart
            img={Img}
            title={"HTML & CSS"}
            para={
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
            }
          />
          <Cart
            img={Img}
            title={"Javascript"}
            para={
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
            }
            className="rotate"
          />
          <Cart
            img={Img}
            title={"Webflow"}
            para={
              "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis"
            }
          />
        </div>
      </div>
    </div>
  );
}
