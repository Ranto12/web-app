import Image from "next/image";

const LogoBox = () => (
  <div className="flex flex-row items-center justify-center w-full flex-nowrap md:justify-start">
    <div className="min-w-[104px] bg-white py-4 px-5 rounded-b-[28px] gradient-border-rounded">
      <Image
        alt="kpoin"
        src="/images/icons/kpoin.webp"
        width={100}
        height={100}
        className="w-[65px] h-[37px] md:w-[84px] md:h-[47px]"
      />
    </div>
  </div>
);

export default LogoBox;
