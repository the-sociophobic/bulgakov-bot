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

  useEffect(() => {
    if (!containerRef.current)
      return

    containerRef.current.addEventListener('scroll', () => {
      const firstSlide = slidesWithRefs[0].ref.current

      if (!containerRef.current || !firstSlide)
        return

      const isFirstSlide = containerRef.current?.scrollLeft < firstSlide.clientWidth * .7

      setCurrentSlide(isFirstSlide ? 0 : 1)
    })
  }, [containerRef.current])

  return (
    <div className='Slideshow'>
      <div
        ref={containerRef}
        className='Slideshow__container'
      >
        <div className='Slideshow__points'>
          {slidesWithRefs.map(({ }, slideIndex) =>
            <div
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
