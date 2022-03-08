import {useEffect, useRef, ReactNode} from 'react'
import anime from 'animejs'
import styles from './index.module.css'

export function FadeSlideIn(props: {className?: string; children: ReactNode}) {
  const {className, children} = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    anime({
      targets: ref.current?.childNodes,
      translateY: ['100vh', 0],
      opacity: [0, 1],
      easing: 'easeOutCubic',
      delay: anime.stagger(100),
    })
  }, [])

  return (
    <div ref={ref} className={`${className} ${styles.hide}`}>
      {children}
    </div>
  )
}