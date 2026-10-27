import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up', // 'up' | 'left' | 'right' | 'fade'
  delay = 0,
  duration = 750,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'div',
  ...rest
}) {
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return true
    }
    return false
  })
  const domRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          if (domRef.current) {
            observer.unobserve(domRef.current)
          }
        }
      },
      { threshold, rootMargin }
    )

    const currentElem = domRef.current
    if (currentElem) {
      observer.observe(currentElem)
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem)
      }
    }
  }, [threshold, rootMargin])

  const getVariantClass = () => {
    switch (direction) {
      case 'left':
        return 'scroll-reveal-left'
      case 'right':
        return 'scroll-reveal-right'
      case 'fade':
        return 'scroll-reveal-fade'
      case 'up':
      default:
        return 'scroll-reveal'
    }
  }

  const customStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <Component
      ref={domRef}
      className={`${getVariantClass()} ${isRevealed ? 'is-revealed' : ''} ${className}`}
      style={customStyle}
      {...rest}
    >
      {children}
    </Component>
  )
}
