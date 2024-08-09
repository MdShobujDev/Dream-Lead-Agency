"use client";

import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  children?: React.ReactNode;
};

const EmblaCarousel: React.FC<PropType> = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="w-full m-auto relative group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex gap-4"
          style={{
            touchAction: "pan-y pinch-zoom",
            marginLeft: "calc(2rem * -1)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
          }}
        >
          {children}
        </div>
      </div>

      <div className=" grid grid-cols-1 justify-between gap-5 mt-2 absolute top-0 bottom-0 left-4 right-4">
        <div className=" flex gap-3 items-center justify-between  ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
