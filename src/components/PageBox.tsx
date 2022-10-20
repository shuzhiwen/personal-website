import {Box, LinearProgress} from '@mui/material'
import {ReactNode, useCallback, useState} from 'react'
import {FadeSlideIn} from './FadeSlideIn'

export function PageBox(props: {children: ReactNode}) {
  const [progress, setProgress] = useState(0)
  const handleScroll = useCallback(({target}) => {
    const {scrollTop, scrollHeight, clientHeight} = target
    const process = (scrollTop / (scrollHeight - clientHeight)) * 100
    setProgress(process)
  }, [])

  return (
    <FadeSlideIn>
      <Box
        onScroll={handleScroll}
        sx={{
          margin: '5vh',
          height: '90vh',
          borderRadius: '8px',
          backgroundColor: 'white',
          border: '1px lightgray solid',
          overflow: 'hidden',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <LinearProgress variant="determinate" value={progress} color="success" />
        <Box
          sx={{
            height: '100%',
            display: 'grid',
            placeContent: 'center',
            overflow: 'scroll',
          }}
        >
          {props.children}
        </Box>
      </Box>
    </FadeSlideIn>
  )
}
