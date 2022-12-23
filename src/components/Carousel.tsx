import { ReactNode, useState } from "react";
import { Icon } from '@iconify/react';

interface CarouselProps {
  slides: Array<ReactNode>;
  containerClasses?: string;
  slideClasses?: string;
}

function Carousel({ slides = [], containerClasses = "", slideClasses = "" }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const nextSlide = () => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);

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
              <Icon icon="carbon:dot-mark" className="max-w-8 max-h-8" color={(index === currentSlide ? "#808080" : "#d9d9d9")} />
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