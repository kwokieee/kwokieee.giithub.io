import { ReactNode, useState } from "react";
import { Icon } from '@iconify/react';

interface CarouselProps {
  containerClasses?: string;
  slideClasses?: string;
  slides: Array<ReactNode>;
  smallCaptions?: Array<SmallCaptionObject>;
  largeCaptions?: Array<LargeCaptionObject>;
}

type SmallCaptionObject = {
  caption: string;
}

type LargeCaptionObject = SmallCaptionObject & {
  subCaption: string;
  buttonText: string;
  onClick: VoidFunction;
}



// Carousel has 3 different designs in this website
function Carousel({ containerClasses = "", slideClasses = "", slides = [], smallCaptions = [], largeCaptions = [] }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const nextSlide = () => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);

  // A carousel with slides, a caption, and a button
  if (largeCaptions.length !== 0) {
    return (
      <div className="w-full lg:h-auto flex flex-col sm:flex-row">
        {/* Slide */}
        {slides.map((slide, index) => {
          return (
            <div key={index} className={(index === currentSlide ? "w-full flex justify-center items-center aspect-square lg:aspect-auto lg:h-[512px] max-h-[512px] bg-white " : "hidden ") + slideClasses}>
              {index === currentSlide && slide}
            </div>
          );
        })}
        {/* Caption with button */}
        <div className="bg-[#515151] flex justify-between h-80 sm:h-auto w-full ">
          <div className="flex flex-col justify-center items-center">
            <Icon icon="ion:chevron-back-circle" onClick={prevSlide} className="pl-1 cursor-pointer w-8 h-8 lg:w-10 lg:h-10" color="#808080" />
          </div>
          <div className="grid grid-rows-6 gap-2 py-4">
            {largeCaptions.map((caption, index) => {
              return (
                <div key={index} className={(index === currentSlide ? "row-span-5 flex flex-col items-center justify-center" : "hidden")}>
                  {
                  index === currentSlide &&
                  <>
                    <p className="text-[#eeeeee] text-lg sm:text-3xl font-extrabold">{caption.caption}</p>
                    <div className="bg-[#eeeeee] h-0.5 w-5/6 max-w-xl my-3 lg:my-4 rounded-sm" />
                    <p className="text-[#eeeeee] text-md sm:text-xl mb-4 px-3 md:px-4">{caption.subCaption}</p>
                    <button className="text-[#eeeeee] bg-transparent border rounded-lg hover:bg-[#6649b8] hover:border-[#6649b8] transition-all duration-300 text-lg p-2" onClick={caption.onClick}>{caption.buttonText}</button>
                  </>
                  }
                </div>
              );
            })}
            <div className="flex justify-center items-center pt-3">
              {slides.map((slide, index) => {
                return (
                  <Icon key={index} icon="bi:dash" width={35} color={(index === currentSlide ? "#000000" : "#d4d4d4")} />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Icon icon="ion:chevron-forward-circle" onClick={nextSlide} className="pr-1 cursor-pointer w-8 h-8 lg:w-10 lg:h-10" color="#808080" />
          </div>
        </div>
      </div>
    );
  }
  
  if (smallCaptions.length !== 0) {
    return (
      <div className="lg:h-auto flex flex-col lg:flex-row">
        <div className="">
          <img src="/images/hero-photo.png" className="object-cover" />
        </div>
        <div className="bg-[#515151] p-6 flex flex-col justify-center items-center h-full lg:h-auto w-full">
          <p className="text-[#eeeeee] text-4xl lg:text-6xl font-extrabold">Hi, I'm Bryan.</p>
          <div className="bg-[#eeeeee] h-0.5 w-5/6 max-w-xl my-3 sm:my-2 lg:my-6 rounded-sm" />
          <p className="text-[#eeeeee] sm:text-2xl lg:text-3xl xl:text-4xl">I learn, I design,</p>
          <p className="text-[#eeeeee] sm:text-2xl lg:text-3xl xl:text-4xl">and I build things.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={"relative w-full h-full flex flex-col " + containerClasses}>
      {slides.map((slide, index) => {
        return (
          <div key={index} className={(index === currentSlide ? "grow " : "hidden ") + slideClasses}>
            {index === currentSlide && slide}
          </div>
        );
      })}
      <div className="mt-2 flex">
        <div className="flex">
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" onClick={prevSlide} className="z-20 cursor-pointer w-6 h-6 lg:w-10 lg:h-10" color="#808080" />
        </div>
        <div className="flex grow justify-center items-center">
          {slides.map((slide, index) => {
            return (
              <Icon key={index} icon="carbon:dot-mark" className="max-w-8 max-h-8" color={(index === currentSlide ? "#808080" : "#d9d9d9")} />
            )
          })}
        </div>
        <div className="flex">
          <Icon icon="material-symbols:arrow-forward-ios-rounded" onClick={nextSlide} className="z-20 cursor-pointer w-6 h-6 lg:w-10 lg:h-10" color="#808080" />
        </div>
      </div>
    </div>
  )
}

export default Carousel