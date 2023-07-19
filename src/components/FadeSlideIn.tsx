import {Stack, SxProps} from '@mui/material'
import anime from 'animejs'
import {ReactNode, useEffect, useRef} from 'react'

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
        scale: [0, 1],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        delay: anime.stagger(200),
      })
    }, 100)
  }, [])

  return (
    <Stack ref={ref} sx={{...sx, opacity: 0}}>
      {children}
    </Stack>
  )
}
