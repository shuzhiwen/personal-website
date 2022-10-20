import emptyImage from '../assets/images/crying.svg'
import {Box} from '@mui/material'

export function Empty() {
  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center',
        placeItems: 'center',
      }}
    >
      <img src={emptyImage} />
      <span>这里什么也没有...</span>
    </Box>
  )
}
