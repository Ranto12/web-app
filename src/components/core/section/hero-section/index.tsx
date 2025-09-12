import LogoBox from "@/components/core/section/hero-section/LogoBox";
import HeroText from "@/components/core/section/hero-section/HeroText";
import DownloadLinks from "@/components/core/section/hero-section/DownloadLinks";
import BackgroundVideo from "@/components/core/section/hero-section/BackgroundVideo";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <BackgroundVideo />
      <div className="relative z-10">
        <div className="layout-main px-10">
          <div className="block">
            <LogoBox />
            <HeroText />
            <DownloadLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
