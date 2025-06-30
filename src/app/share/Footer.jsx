import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className=" flex items-center justify-center">
      <div className="min-h-[767px] max-w-[1440px] xl:w-[1440px] flex justify-between pt-[90px] pb-[70px] lg:pr-[120px] lg:pl-[65px] px-5  bg-[#000000] rounded-[52px] xxl:gap-[338px] gap-10 md:flex-row flex-col">
        <div className="flex flex-row md:flex-col justify-between gap-10 ">
          <h2 className="text-[#C5FF41] font-extrabold text-[34px] uppercase leading-[34px]">
            devlop.me
          </h2>
          <h4 className="text-[#FFFFFF] font-extrabold text-[24px] leading-[34px]">
            BESNIK
          </h4>
        </div>
        <div>
          <h3 className="text-[#FFFFFF] font-bold text-[44px] lg:text-[64px] lg:leading-[64px]">
            As You Can
          </h3>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-32 mt-[138px]">
            <div className="flex flex-col gap-[53px]">
              <div className="flex flex-col gap-5">
                <h5 className="text-[#757575] text-[16px] font-bold leading-[24px]">
                  Say hello
                </h5>
                <div className="flex flex-col gap-[10px]">
                  <Link
                    href={"#"}
                    className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                  >
                    HELLO@DEVLOP.ME.COM
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                  >
                    MAHBUBUL@ME.COM
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h5 className="text-[#757575] text-[16px] font-bold leading-[24px]">
                  Call
                </h5>
                <div className="flex flex-col gap-[10px]">
                  <Link
                    href={"#"}
                    className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                  >
                    +784549 4981 00
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                  >
                    +8845 0100 211
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <h5 className="text-[#757575] text-[16px] font-bold leading-[24px]">
                Menu
              </h5>
              <div className="flex flex-col gap-[10px]">
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  HOME
                </Link>
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  ABOUT
                </Link>
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  PORTFOLIO
                </Link>
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  BLOG
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-[#757575] text-[16px] font-bold leading-[24px]">
                Social
              </h5>
              <div className="flex flex-col gap-[10px]">
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  TWITTER
                </Link>
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  FACEBOOK
                </Link>
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  BEHANCE
                </Link>
                <Link
                  href={"#"}
                  className="text-[16px] font-normal text-[#E4E4E4] leading-[24px]"
                >
                  DRIBBBLE
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-[131px]">
            <p className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] opacity-[0.5]">
              © devlop.me 2022{" "}
            </p>
            <div className="flex">
              <Link
                className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] opacity-[0.5]"
                href={"#"}
              >
                PRIVACY -{" "}
              </Link>
              <Link
                className="text-[#FFFFFF] font-normal text-[16px] leading-[24px] opacity-[0.5]"
                href={"#"}
              >
                TERMS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
