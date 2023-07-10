import {LinearProgress, Stack} from '@mui/material'
import {ReactNode, useCallback, useState} from 'react'
import {FadeSlideIn} from './FadeSlideIn'

export function ContentBox(props: {children: ReactNode}) {
  const [progress, setProgress] = useState(0)
  const handleScroll = useCallback(({target}) => {
    const {scrollTop, scrollHeight, clientHeight} = target
    const process = (scrollTop / (scrollHeight - clientHeight)) * 100
    setProgress(process)
  }, [])

  return (
    <FadeSlideIn sx={{height: '100%'}}>
      <Stack
        flex={1}
        onScroll={handleScroll}
        sx={{
          m: 4,
          borderRadius: '8px',
          backgroundColor: 'white',
          border: '1px lightgray solid',
          overflow: 'hidden',
        }}
      >
        <LinearProgress variant="determinate" value={progress} color="success" />
        <Stack
          sx={{
            height: '100%',
            display: 'grid',
            placeContent: 'center',
            overflow: 'auto',
          }}
        >
          {props.children}
        </Stack>
      </Stack>
    </FadeSlideIn>
  )
}
