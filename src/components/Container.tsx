import styled from '@emotion/styled'
import {Stack} from '@mui/material'
import {CSSProperties} from 'react'

export const FullStack = styled(Stack)({
  width: '100%',
  height: '100%',
  overflow: 'auto',
})

export const AppContainer = styled('iframe')(
  ({web, mobile, style}: {web: boolean; mobile: boolean; style?: CSSProperties}) => ({
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: 'white',
    minWidth: web && !mobile ? 900 : undefined,
    maxWidth: !web && mobile ? '70vh' : undefined,
    margin: 'auto',
    ...style,
  })
)
