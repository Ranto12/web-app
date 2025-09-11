import { Button } from "@/components/core/button";

const ContentDetail = ({
  subtitle,
  description,
  animationKey,
}: {
  subtitle: string;
  description: string;
  animationKey: number;
}) => (
  <div className="layout-main lg:gap-4">
    <h1 className="text-2xl font-bold text-center mb-4 fade-slide-in md:text-[52px] md:font-semibold lg:text-left">
      {subtitle}
    </h1>
    <div className="relative h-[120px] text-sm mb-6 md:font-medium md:text-base">
      <p
        key={animationKey}
        className="absolute w-full text-sm dark-gray text-center fade-slide-in line-clamp-6 lg:text-left"
      >
        {description}
      </p>
    </div>
    <Button fullWidth className="lg:w-auto lg:text-base lg:px-[87px]">
      Sehat Bareng KPoin
    </Button>
  </div>
);

export default ContentDetail;
