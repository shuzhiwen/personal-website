import {Stack} from '@mui/material'
import anime from 'animejs'
import {useEffect, useRef} from 'react'
import githubImage from '../assets/images/github.svg'

export function Github() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      anime({
        targets: ref.current,
        easing: 'easeOutCubic',
        duration: 1000,
        right: -48,
        top: -48,
      })
    }, 100)
  }, [])

  return (
    <Stack
      ref={ref}
      sx={{
        top: -96,
        right: -96,
        width: 96,
        height: 96,
        opacity: 0.3,
        position: 'fixed',
        transform: 'rotate(45deg)',
        justifyContent: 'end',
        alignItems: 'center',
        cursor: 'pointer',
        bgcolor: 'white',
      }}
      onClick={() => {
        window.open('https://github.com/shuzhiwen')
      }}
    >
      <img src={githubImage} style={{width: 32, height: 32}} />
    </Stack>
  )
}
