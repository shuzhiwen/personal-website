import styled from '@emotion/styled'
import {Stack} from '@mui/material'
import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import {AppConfig} from '../constants/app'
import {Loading} from './Status'

export const FullStack = styled(Stack)({
  width: '100%',
  height: '100%',
  overflow: 'auto',
})

export function SubAppContainer(props: AppConfig) {
  const [loading, setLoading] = useState(true)
  const {path, url, web, mobile} = props
  const {pathname} = useLocation()

  return (
    <>
      {loading && (
        <Stack position="absolute" width="100%" height="100%">
          <Loading />
        </Stack>
      )}
      <iframe
        src={url + pathname.replace(path, '')}
        onLoad={() => setLoading(false)}
        style={{
          width: '100%',
          height: '100%',
          minWidth: web && !mobile ? 900 : undefined,
          maxWidth: !web && mobile ? '70vh' : undefined,
          backgroundColor: 'white',
          border: 'none',
          margin: 'auto',
        }}
      />
    </>
  )
}
