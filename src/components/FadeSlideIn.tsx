import anime from 'animejs'
import {useEffect, useRef, ReactNode} from 'react'
import {Box, SxProps} from '@mui/material'

export function FadeSlideIn(props: {sx?: SxProps; children: ReactNode}) {
  const {sx, children} = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      anime({
        targets: ref.current,
        duration: 0,
        opacity: 1,
      })
      anime({
        targets: ref.current?.childNodes,
        translateY: ['100vh', 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        delay: anime.stagger(100),
      })
    }, 100)
  }, [])

  return (
    <Box ref={ref} sx={{...sx, opacity: 0}}>
      {children}
    </Box>
  )
}
