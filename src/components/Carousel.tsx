import { ReactNode, useState } from "react";
import { Icon } from '@iconify/react';

interface CarouselProps {
  slides: Array<ReactNode>;
}

function Carousel({ slides = [] }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const nextSlide = () => setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);

  return (
    <div className="relative w-full h-full">
      <Icon icon="material-symbols:arrow-circle-right-rounded" onClick={nextSlide} className="absolute right-0 top-[50%] z-20 cursor-pointer" width={50} height={50} />
      <Icon icon="material-symbols:arrow-circle-left-rounded" onClick={prevSlide} className="absolute left-0 top-[50%] z-20 cursor-pointer" width={50} height={50} />
      {slides.map((slide, index) => {
        return (
          <div key={index} className={index === currentSlide ? 'w-full h-full' : 'hidden w-full h-full'}>
            {index === currentSlide && slide}
          </div>
        );
      })}
    </div>
  )
}

export default Carousel