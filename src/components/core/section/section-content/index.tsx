import { useEffect, useState } from "react";
import { listContent } from "@/data/content";
import { Card } from "@/components/core/card";
import ContentImage from "@/components/core/section/section-content/ContentImage";
import ContentChips from "@/components/core/section/section-content/ContentChips";
import ContentDetail from "@/components/core/section/section-content/ContentDetail";

const ContentSection = () => {
  // const [shuffledList, setShuffledList] = useState(listContent);

  // const [select, setSelect] = useState(0);
  // const [animationKey, setAnimationKey] = useState(0);

  // const handleChangeContent = (index: number) => {
  //   if (index !== select) {
  //     setSelect(index);
  //     setAnimationKey((prev) => prev + 1);
  //   }
  // };

  // useEffect(() => {
  //   setShuffledList([...listContent].sort(() => Math.random() - 0.5));
  // }, []);
  const [shuffledList, setShuffledList] = useState(listContent);
  const [select, setSelect] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const handleChangeContent = (index: number) => {
    if (index !== select) {
      setSelect(index);
      setAnimationKey((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setShuffledList([...listContent].sort(() => Math.random() - 0.5));
  }, []);



  return (
    <div className="mt-10 layout-main lg:mb-14">
      <Card className="lg:p-8">
        <div className="lg:flex lg:gap-10">
          <ContentImage />
          <div className="overflow-hidden lg:space-y-6">
            <ContentChips
              items={shuffledList}
              selected={select}
              onSelect={handleChangeContent}
            />
            <ContentDetail
              subtitle={shuffledList[select].subtitle}
              description={shuffledList[select].description}
              animationKey={animationKey}
            />
          </div>
        </div>
      </Card>
    </div>
    // <div className="mt-10 layout-main lg:mb-14">
    //   <Card className="lg:p-8">
    //     <div className="lg:flex lg:gap-10">
    //       <div className="layout-main w-auto md:p-0 md:m-0 md:min-w-[380px] flex justify-center">
    //         <Image
    //           alt="topup"
    //           src="/images/contents/topup.webp"
    //           width={256}
    //           height={256}
    //           className="w-full max-w-[380px] aspect-square md:w-[380px]"
    //         />
    //       </div>
    //       <div className="overflow-hidden lg:space-y-6">
    //         <div className="flex gap-3 overflow-auto scrollbar-hide px-4 py-6 md:pt-8">
    //           {shuffledList.map((content, index) => (
    //             <div
    //               key={index}
    //               className={`px-4 py-2 rounded-4xl cursor-pointer ${
    //                 select === index ? "select-chip" : "unselect-chip"
    //               }`}
    //               onClick={() => handleChangeContent(index)}
    //             >
    //               <p className="font-semibold text-sm whitespace-nowrap">
    //                 {content.title}
    //               </p>
    //             </div>
    //           ))}
    //         </div>
    //         <div className="layout-main lg:gap-4">
    //           <h1 className="text-2xl font-bold text-center mb-4 fade-slide-in md:text-[52px] md:font-semibold lg:text-left">
    //             {shuffledList[select].subtitle}
    //           </h1>
    //           <div className="relative h-[120px] text-sm mb-6 md:font-medium md:text-base">
    //             <p
    //               key={animationKey}
    //               className="absolute w-full text-sm dark-gray text-center fade-slide-in line-clamp-6 lg:text-left"
    //             >
    //               {shuffledList[select].description}
    //             </p>
    //           </div>
    //           <Button fullWidth className="lg:w-auto lg:text-base lg:px-[87px]">
    //             Sehat Bareng KPoin
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </Card>
    // </div>
  );
};

export default ContentSection;
