import styled from '@emotion/styled'
import {Stack} from '@mui/material'
import {AppConfig} from '../constants/app'
import {useLocation} from 'react-router-dom'

export const FullStack = styled(Stack)({
  width: '100%',
  height: '100%',
  overflow: 'auto',
})

export function SubAppContainer(props: AppConfig) {
  const {path, url, web, mobile} = props
  const {pathname} = useLocation()

  return (
    <iframe
      src={url + pathname.replace(path, '')}
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        backgroundColor: 'white',
        minWidth: web && !mobile ? 900 : undefined,
        maxWidth: !web && mobile ? '70vh' : undefined,
        margin: 'auto',
      }}
    />
  )
}
