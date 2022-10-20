import {ReactNode, Fragment} from 'react'
import ReactPlaceholder from 'react-placeholder'
import {RectShape} from 'react-placeholder/lib/placeholders'
import 'react-placeholder/lib/reactPlaceholder.css'
import {Box} from '@mui/material'

export function Placeholder(props: {loaded: boolean; height: number; children: ReactNode}) {
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
      <Box sx={{display: loaded ? 'block' : 'none'}}>{children}</Box>
    </Fragment>
  )
}
