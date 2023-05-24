import emptyImage from '../assets/images/crying.svg'
import {Stack, Typography} from '@mui/material'

export function Empty() {
  return (
    <Stack
      sx={{
        display: 'grid',
        placeContent: 'center',
        placeItems: 'center',
      }}
    >
      <img src={emptyImage} />
      <Typography>这里什么也没有...</Typography>
    </Stack>
  )
}

export function Fallback() {
  return (
    <Stack alignItems="center">
      <Typography>加载中...</Typography>
    </Stack>
  )
}
