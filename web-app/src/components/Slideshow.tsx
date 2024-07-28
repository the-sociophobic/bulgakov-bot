import { debounce } from 'lodash'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'


export type SlideshowProps = {
  slides: ReactNode[]
}


const Slideshow: FC<SlideshowProps> = ({
  slides
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const slidesWithRefs = slides.map(slide => ({
    slide,
    ref: useRef<HTMLDivElement>(null)
  }))

  const moveToSlide = (slideIndex: number) => {
    const slide = slidesWithRefs[slideIndex]

    slide.ref.current?.scrollIntoView()
    setCurrentSlide(slideIndex)
  }

  const scrollFn = debounce(() => {
    const firstSlide = slidesWithRefs[0].ref.current

    if (!containerRef.current || !firstSlide)
      return

    const numberOfSlide = Math.floor((containerRef.current.scrollLeft + 50) / firstSlide.clientWidth)

    setCurrentSlide(numberOfSlide)
    // setScrollStopped((new Date()).getMilliseconds())
  })

  useEffect(() => {
    if (!containerRef.current)
      return

    containerRef.current.addEventListener('scroll', scrollFn)

    return () => {
      containerRef.current?.removeEventListener('scroll', scrollFn)
    }
  }, [containerRef.current])

  // const [scrollStopped, setScrollStopped] = useState(0)
  // const frameUpdate = () => {
  //   const firstSlide = slidesWithRefs[0].ref.current

  //   if (!containerRef.current || !firstSlide)
  //     return

  //   const { scrollLeft } = containerRef.current
  //   const numberOfSlide = Math.floor((scrollLeft + 50) / firstSlide.clientWidth)
  //   const intendedScroll = Math.floor(numberOfSlide * firstSlide.clientWidth)
  //   const scrollDelta = scrollLeft - intendedScroll
  //   console.log(scrollStopped - (new Date()).getMilliseconds())
  //   // if (Math.abs(scrollDelta) > 1 && scrollStopped - (new Date()).getMilliseconds() > 1000)
  //   if (Math.abs(scrollDelta) > 1)
  //     containerRef.current.scrollTo(scrollLeft + scrollDelta * .05, 0)
  // }
  // const interval = useRef<NodeJS.Timeout | null>(null)
  // useEffect(() => {
  //   interval.current = setInterval(frameUpdate, 100)

  //   return () => {
  //     if (interval.current)
  //       clearInterval(interval.current)
  //   }
  // }, [interval.current])

  return (
    <div className='Slideshow'>
      <div
        ref={containerRef}
        className='Slideshow__container'
      >
        <div className='Slideshow__points'>
          {slidesWithRefs.map(({ }, slideIndex) =>
            <div
              key={slideIndex}
              onClick={() => moveToSlide(slideIndex)}
              className={`
                Slideshow__points__item
                Slideshow__points__item--${slideIndex === currentSlide && 'current'}
              `}
            />
          )}
        </div>
        <div className='d-flex flex-row mt-5'>
          {slidesWithRefs.map(({ slide, ref }, slideIndex) =>
            <div
              key={slideIndex}
              ref={ref}
              className='Slideshow__slide'
              onClick={() => moveToSlide(slideIndex)}
            >
              {slide}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default Slideshow
