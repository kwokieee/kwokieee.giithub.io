import { ReactHTMLElement, ReactNode, useRef, useState } from "react";
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
  const carousel = useRef<HTMLInputElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const nextSlide = () => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);

  const incrementCarousel = (delta: number) => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;

    if (currentSlide + delta >= slides.length) {
      setCurrentSlide(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (currentSlide + delta < 0) {
      setCurrentSlide(slides.length - 1);
      console.log(width, carousel.current.scrollLeft);
      carousel.current.scrollTo(width * slides.length - 1, 0);
      return;
    }

    carousel.current.scrollTo(
      carousel.current.scrollLeft + width * delta,
      0
    );
    setCurrentSlide(c => c + delta);
  };

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
  
  // A carousel with slides and a caption
  if (smallCaptions.length !== 0) {
    return (
      <div className={"relative w-full h-full flex flex-col " + containerClasses}>
        {/* Slide */}
        {slides.map((slide, index) => {
          return (
            <div key={index} className={(index === currentSlide ? " " : "hidden ") + slideClasses}>
              {index === currentSlide && slide}
            </div>
          );
        })}
        {/* Caption */}
        <div className="bg-[#515151] h-1/2 flex flex-col">
          <div className="flex justify-center items-center pt-2">
            {slides.map((slide, index) => {
              return (
                <Icon key={index} icon="bi:dash" width={35} color={(index === currentSlide ? "#000000" : "#d4d4d4")} />
              )
            })}
          </div>
          <div className="h-full flex justify-between items-center w-full pb-2">
            <div className="flex flex-col justify-center items-center">
              <Icon icon="ion:chevron-back-circle" onClick={prevSlide} className="pl-1 cursor-pointer w-6 h-6 sm:w-10 sm:h-10" color="#808080" />
            </div>
            <div className="px-1">
              {smallCaptions.map((caption, index) => (<p key={index} className={index === currentSlide ? "text-sm text-[#eeeeee] italic" : "hidden"}>{caption.caption}</p>))}
            </div>
            <div className="flex flex-col justify-center items-center">
              <Icon icon="ion:chevron-forward-circle" onClick={nextSlide} className="pr-1 cursor-pointer w-6 h-6 sm:w-10 sm:h-10" color="#808080" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // A normal carousel
  return (
    <div className={"relative w-full h-full flex flex-col " + containerClasses}>
      <div className="relative flex justify-center">
        <Icon icon="ion:chevron-back-circle" onClick={() => incrementCarousel(-1)} className="absolute top-1/2 left-2 z-20 cursor-pointer w-6 h-6 lg:w-10 lg:h-10" color="#808080" />
        <div className="flex snap-mandatory scroll-smooth" ref={carousel}>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={"flex h-[60vh] flex-col justify-center items-center flex-[1 0 100%] snap-start transition-all ease-in-out duration-500 " + (index === currentSlide ? "opacity-100 " : "opacity-0")}>
              {index === currentSlide && slide}
            </div>
          );
        })}
        </div>
        <Icon icon="ion:chevron-forward-circle" onClick={() => incrementCarousel(1)} className="absolute top-1/2 right-2 z-20 cursor-pointer w-6 h-6 lg:w-10 lg:h-10" color="#808080" />
      </div>
      <div className="mt-2 flex">
        <div className="flex grow justify-center items-center">
          {slides.map((slide, index) => {
            return (
              <Icon key={index} icon="bi:dash" width={35} color={(index === currentSlide ? "#000000" : "#d4d4d4")} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel