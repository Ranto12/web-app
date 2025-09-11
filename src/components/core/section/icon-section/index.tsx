import Image from "next/image";

const IconsSection = () => {
  return (
    <div className="flex justify-center w-full mt-2 min-[1280px]:relative">
      <Image
        alt=""
        src="/images/icons/Poink-transparant.webp"
        width={288}
        height={288}
        className="w-[288px] md:w-[364px] min-[1280px]:max-w-[280px] min-[1280px]:absolute min-[1280px]:bottom-0 min-[1280px]:-right-10 min-[1280px]:z-20"
      />
    </div>
  );
};

export default IconsSection;
