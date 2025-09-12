import Image from "next/image";

const ContentImage = () => (
  <div className="layout-main w-auto md:p-0 md:m-0 md:min-w-[380px] flex justify-center">
    <Image
      alt="topup"
      src="/images/contents/topup.webp"
      width={256}
      height={259}
      className="w-full max-w-[380px]"
    />
  </div>
);

export default ContentImage;
