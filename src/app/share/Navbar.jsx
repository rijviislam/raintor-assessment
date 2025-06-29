import Image from "next/image";
import Link from "next/link";
import NavIcon from "../../../public/assets/nav-icon.svg";
export default function Navbar() {
  return (
    <nav className="flex px-[50px] justify-between items-center py-7 absolute w-full z-50 nav-bg ">
      <h1 className="uppercase text-[#000] font-extrabold text-[34px]">
        devlop.me
      </h1>
      <div className="flex items-center gap-[67px]">
        <ul className="flex gap-9 text-[#000000] font-normal text-[16px] leading-[18x]">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"#"}>Blog</Link>
          </li>
        </ul>
        <button className="flex gap-3 border border-[#000000] items-center pr-[12px] rounded-[39px] cursor-pointer text-[16px] font-normal leading-[18px] text-[#000000]">
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
    </nav>
  );
}
