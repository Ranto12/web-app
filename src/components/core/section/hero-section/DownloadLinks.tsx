import Image from "next/image";
import Link from "next/link";

const DownloadLinks = () => (
  <div className="md:flex md:gap-6 md:mt-[72px]">
    <p className="text-xs font-semibold text-white text-center pt-4 md:text-base md:font-bold">
      Bisa Download di
    </p>
    <div className="flex justify-center items-center pt-3 gap-2">
      <Link
        href="https://apps.apple.com/id/app/kpoin/id6736534639?l=id"
        target="_blank"
        rel="noopener noreferrer"
        data-unq="homepage-link-appStore"
        className="cursor-pointer"
      >
        <Image
          alt="appstore"
          src="/images/icons/appstore.webp"
          width={124}
          height={100}
          className="md:w-[145px] md:h-[42px]"
        />
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.kpoin.app&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        data-unq="homepage-link-playStore"
        className="cursor-pointer"
      >
        <Image
          alt="googleplay"
          src="/images/icons/googleplay.webp"
          width={124}
          height={100}
          className="md:w-[145px] md:h-[42px]"
        />
      </Link>
    </div>
  </div>
);

export default DownloadLinks;
