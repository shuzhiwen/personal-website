import {CircularProgress, Stack, Typography} from '@mui/material'
import emptyImage from '../assets/images/crying.svg'

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

export function Loading() {
  return (
    <Stack flex={1} alignItems="center" justifyContent="center">
      <CircularProgress />
    </Stack>
  )
}
