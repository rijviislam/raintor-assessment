import Image from "next/image";
import Link from "next/link";
import NavIcon from "../../../public/assets/nav-icon.svg";
export default function Navbar() {
  return (
    <nav className="flex  justify-center w-full h-[114px] md:h-auto ">
      <div className="flex px-5 md:px-[50px] justify-between items-center py-7 absolute xxl:max-w-[1440px] w-full xxl:gap-[540px] z-50 nav-bg ">
        <h1 className="uppercase text-[#000] font-extrabold text-[34px]">
          devlop.me
        </h1>
        <div className="hidden md:flex items-center gap-5 lg:gap-[67px]">
          <ul className="flex gap-3 lg:gap-9 text-[#000000] font-normal text-[16px] leading-[18x]">
            <li>
              <Link href={"#hero"}>Home</Link>
            </li>
            <li>
              <Link href={"#about"}>About</Link>
            </li>
            <li>
              <Link href={"#workTgether"}>Portfolio</Link>
            </li>
            <li>
              <Link href={"#footer"}>Blog</Link>
            </li>
          </ul>
          <button className="flex gap-3 border border-[#000000] items-center pr-[12px] rounded-[39px] cursor-pointer text-[16px] font-normal leading-[18px] text-[#000000] btn">
            <Image
              width={38}
              height={38}
              src={NavIcon}
              alt="Call icon"
              className="my-[10px]"
            />{" "}
            Start Project
          </button>
        </div>
      </div>
    </nav>
  );
}
