"use client";

import useEmblaCarousel from "embla-carousel-react";
import LearnCard from "./learn-card";
import { VIDEOSECTIONURL } from "@/app/constants";
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useRef } from "react";
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
  } from 'embla-carousel'
const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)
export default function LearnCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()]);
  const tweenFactor = useRef(0)


  const setTweenFactor = useCallback((emblaApi:EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity])

  return (
    <div className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
       
          <div className="embla__slide">
          <LearnCard
            title="Why Neet Physics Is More Important Than You Ever Thought ?
"
            description="You can master biology and chemistry , so does everyone. But Physics, that's another level. If you are not good in neet physics, you are going to end up failure again and again. That's true whether you believe it or not.
"
            image={VIDEOSECTIONURL}
            link="https://www.google.com"
          /> 
          <LearnCard
            title="Why Neet Physics Is More Important Than You Ever Thought ?
"
            description="You can master biology and chemistry , so does everyone. But Physics, that's another level. If you are not good in neet physics, you are going to end up failure again and again. That's true whether you believe it or not.
"
            image={VIDEOSECTIONURL}
            link="https://www.google.com"
          /> 
          <LearnCard
            title="Why Neet Physics Is More Important Than You Ever Thought ?
"
            description="You can master biology and chemistry , so does everyone. But Physics, that's another level. If you are not good in neet physics, you are going to end up failure again and again. That's true whether you believe it or not.
"
            image={VIDEOSECTIONURL}
            link="https://www.google.com"
          /> 
          </div>
        
      </div>
    </div>
    </div>
  );
}


 