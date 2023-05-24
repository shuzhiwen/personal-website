import styled from '@emotion/styled'
import {Stack} from '@mui/material'

export const FullStack = styled(Stack)({
  width: '100%',
  height: '100%',
  overflow: 'auto',
})

export const AppContainer = styled('iframe')((props: {isMobile: boolean}) => ({
  width: '100%',
  height: '100%',
  border: 'none',
  backgroundColor: 'white',
  minWidth: props.isMobile ? undefined : 900,
}))
