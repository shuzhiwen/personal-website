import {Stack} from '@mui/material'
import {Fragment, PropsWithChildren} from 'react'
import ReactPlaceholder from 'react-placeholder'
import {RectShape} from 'react-placeholder/lib/placeholders'
import 'react-placeholder/lib/reactPlaceholder.css'

type PlaceholderProps = PropsWithChildren<{
  loaded: boolean
  height: number
}>

export function Placeholder(props: PlaceholderProps) {
  const {loaded, height, children} = props
  return (
    <Fragment>
      <ReactPlaceholder
        ready={loaded}
        showLoadingAnimation
        customPlaceholder={
          <div className="my-awesome-placeholder">
            <RectShape color="aquamarine" style={{width: '100%', height: height}} />
          </div>
        }
      >
        {null}
      </ReactPlaceholder>
      <Stack sx={{display: loaded ? 'block' : 'none'}}>{children}</Stack>
    </Fragment>
  )
}
