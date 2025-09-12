import { Fragment } from "react";
import Divider from "@/components/core/divinder";
import { informationSlider } from "@/data/content";
import { Marquee } from "@/components/core/marquee";

const SliderSection = () => {
  return (
    <div>
      <Divider
        orientation="horizontal"
        thickness={2}
        color="#D3D3D3"
        length="full"
        className="mb-[22px]"
      />
      <Marquee speed={30} direction="right" pauseOnHover={false}>
        <div className="flex gap-[24px]">
          {informationSlider?.map((information, index) => (
            <Fragment key={index}>
              <div className="flex gap-x-4 items-center">
                <h1 className="font-bold text-[32px] md:text-[52px]">{information.sell}</h1>
                <p className="text-base medium-gray whitespace-pre-line md:text-lg">
                  {information.name.replace(" ", "\n")}
                </p>
              </div>
              {informationSlider.length && (
                <Divider
                  orientation="vertical"
                  thickness={2}
                  color="#D3D3D3"
                  className="my-auto"
                />
              )}
            </Fragment>
          ))}
        </div>
      </Marquee>
      <Divider
        orientation="horizontal"
        thickness={2}
        color="#D3D3D3"
        length="full"
        className="mt-[22px]"
      />
    </div>
  );
};

export default SliderSection;
