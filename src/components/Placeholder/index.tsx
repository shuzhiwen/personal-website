import {ReactNode, Fragment} from 'react'
import ReactPlaceholder from 'react-placeholder'
import {RectShape} from 'react-placeholder/lib/placeholders'
import styles from './index.module.css'
import 'react-placeholder/lib/reactPlaceholder.css'

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
      <div className={loaded ? styles.show : styles.hide}>{children}</div>
    </Fragment>
  )
}
