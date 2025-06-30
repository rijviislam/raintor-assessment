import Image from "next/image";
import SocialLogo2 from "../../../public/assets/Vector (1).svg";
import SocialLogo1 from "../../../public/assets/Vector.svg";
import CallIcon from "../../../public/assets/call.svg";
import HeroBanner from "../../../public/assets/hero-banner.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[888px] pb-16 max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col gap-[50px]  justify-center h-full relative z-40 md:ml-[50px] mx-5">
        <h1 className="lg:text-[78px] text-[48px] font-bold md:leading-[126px] font-grotesque ">
          Trusted{" "}
          <span className="bg-[#000] text-white h-[105px] w-[438px] rounded-[11px] px-[10px]">
            Partner
          </span>{" "}
          for <br /> Your Website{" "}
          <span className="bg-[#000] text-white h-[105px] w-[438px] rounded-[11px] px-[10px]">
            Develop.
          </span>
        </h1>
        <div className="flex flex-col md:flex-row gap-[50px] lg:gap-[253px]">
          <div className="[writing-mode:sideways-lr] flex flex-col gap-[22px]">
            <p className="text-[#000000] text-[18px] font-normal leading-[33px]">
              @williamrey
            </p>
            {/* SOCIAL ICON  */}
            <div className="flex gap-5 items-center">
              <p className="w-[2px] h-[45px] bg-[#000000]"></p>
              <button className="cursor-pointer">
                <Image
                  src={SocialLogo1}
                  width={27}
                  height={27}
                  alt="Social Logo"
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src={SocialLogo2}
                  width={27}
                  height={27}
                  alt="Social Logo"
                />
              </button>
              <button className="cursor-pointer">
                <Image
                  src={SocialLogo2}
                  width={27}
                  height={27}
                  alt="Social Logo"
                />
              </button>
            </div>
          </div>
          <div className="flex gap-[42px] flex-col items-start">
            <p className="text-[#000000] md:text-[18px]">
              Building the worlds best marketing websites for over a decade.{" "}
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>
            <button className="flex gap-3 border border-black items-center pr-[21px] rounded-[39px] cursor-pointer">
              <div className="w-[50px] h-[50px] border border-black flex items-center justify-center rounded-full my-3">
                <Image width={20} height={20} src={CallIcon} alt="Call icon" />{" "}
              </div>
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      <Image
        src={HeroBanner}
        alt="Banner"
        className="w-full h-full absolute top-0 z-10 object-contain"
      />
    </section>
  );
}
