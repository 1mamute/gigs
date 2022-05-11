import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

type CarouselProps = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

export default function HomeCarousel(props: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, props.slides]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex mt-6 w-full h-full embla">
      <div className="w-full h-full" ref={emblaRef}>
        <div className="w-full h-full embla__container">
          {props.slides.map((slide, index) => (
            <div className="flex-auto mx-4 w-full h-full embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
        <button
          className="left-6 w-24 h-24 disabled:opacity-30 disabled:cursor-default embla__button"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <FontAwesomeIcon icon={faBackward} className="w-full h-full text-2xl md:text-3xl lg:text-5xl" />
        </button>
        <button
          className="right-6 disabled:opacity-30 disabled:cursor-default embla__button"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <FontAwesomeIcon icon={faForward} className="w-full h-full text-2xl md:text-3xl lg:text-5xl" />
        </button>
      </div>
    </div>
  );
}
