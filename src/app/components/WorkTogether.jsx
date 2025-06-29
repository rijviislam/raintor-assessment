import Image from "next/image";
import CallIcon from "../../../public/assets/call.svg";
import Msg from "../../../public/assets/mail.svg";
import Mailg from "../../../public/assets/msg.svg";
import Social from "../../../public/assets/social.svg";
import WorkBanner from "../../../public/assets/work-banner.svg";

import Cta from "../share/Cta";
export default function WorkTogether() {
  return (
    <section
      id="workTogether"
      className="pt-[51px] pb-[116px] relative max-w-[1440px] mx-auto"
    >
      <div className="flex justify-between gap-10 relative z-50 mx-[50px]">
        <div>
          <Cta btnTitle={"Contact"} className="border-black text-black " />
          <div>
            <h2 className="text-[78px] font-bold leading-[126px] ">
              Interested in <br />
              <span className="bg-[#000000] text-[#FFF] rounded-[11px] h-[105px] w-[269px]">
                work
              </span>{" "}
              together?
            </h2>
            <p className="max-w-[921px] text-[18px] font-normal mt-[18px] mb-[34px]">
              We start every new client interaction with an in-depth discovery{" "}
              <br />
              call where we get to know each other
            </p>
            <button className="flex gap-3 border border-black items-center pr-[21px] rounded-[39px] cursor-pointer">
              <div className="w-[50px] h-[50px] border border-black flex items-center justify-center rounded-full my-3">
                <Image width={20} height={20} src={CallIcon} alt="Call icon" />{" "}
              </div>
              Schedule a Call
            </button>
          </div>
        </div>
        <form
          action=""
          className="w-[529px] h-[506px] flex flex-col rounded-[30px] bg-[#000] px-[35px] pt-[45px] pb-10 gap-6"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="outline-none text-[#FFFFFF] text-[18px] font-normal leading-[34px] border-b border-[#C5FF41] pb-3 focus:border-[#C5FF41] "
          />
          <input
            type="email"
            placeholder="Your email address"
            className="outline-none text-[18px] text-[#FFFFFF] font-normal leading-[34px] border-b border-[#FFFFFF] pb-3 focus:border-[#C5FF41] opacity-[0.5]"
          />
          <input
            type="text"
            placeholder="Describe your project"
            className="outline-none text-[18px] text-[#FFFFFF] font-normal leading-[34px] border-b border-[#FFFFFF] pb-3 focus:border-[#C5FF41] opacity-[0.5]"
          />

          <div>
            <div className="flex text-white items-center gap-[14px] mt-[46px] mb-[69px]">
              <button className="flex gap-3 border border-[#FFF] items-center pr-[29px] rounded-[39px] cursor-pointer text-[#FFF] font-normal">
                <div className="w-[36px] h-[36px] border border-[#FFF] flex items-center justify-center rounded-full my-[9px]">
                  <Image width={13} height={13} src={Msg} alt="Msg icon" />{" "}
                </div>
                Send
              </button>
              or
              <button className="flex gap-3 border border-[#FFF] items-center pr-[29px] rounded-[39px] cursor-pointer text-[#FFF] font-normal">
                <div className="w-[36px] h-[36px] border border-[#FFF] flex items-center justify-center rounded-full my-[9px]">
                  <Image width={13} height={13} src={Mailg} alt="Msg icon" />{" "}
                </div>
                Contact me
              </button>
            </div>
            <div className="flex gap-[25px] ]">
              <p className="text-[#FFF]">@williamrey</p>
              {/* SOCIAL  */}
              <Image src={Social} alt="social" />
            </div>
          </div>
        </form>
      </div>
      <Image
        src={WorkBanner}
        alt="Work Banner"
        className="w-full h-full absolute object-cover bottom-0 z-0"
      />
    </section>
  );
}
