import Image from "next/image";

export default function Cart({ img, title, para, className = "" }) {
  return (
    <div
      className={`rounded-[30px] w-[430px] h-[365px] bg-[#FFFFFF14] py-12 px-[35px] ${className}`}
    >
      <Image src={img} alt="Cart Img" />
      <h2 className="text-white mt-[35px] mb-5 text-[26px] font-bold leading-[34px]">
        {title}
      </h2>
      <p className="text-white opacity-[0.7px] text-[16px] font-normal">
        {para}
      </p>
    </div>
  );
}
