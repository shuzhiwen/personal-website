import {ReactNode, useCallback, useState} from 'react'
import {ProgressBar} from 'react-bootstrap'
import {FadeIn} from '../Animation'
import styles from './index.module.css'

export function PageBox(props: {children: ReactNode}) {
  const [progress, setProgress] = useState(0)
  const handleScroll = useCallback(({target}) => {
    const {scrollTop, scrollHeight, clientHeight} = target
    const process = (scrollTop / (scrollHeight - clientHeight)) * 100

    setProgress(process)
  }, [])

  return (
    <FadeIn>
      <div onScroll={handleScroll} className={styles.container}>
        <ProgressBar now={progress} className={styles.processBar} />
        <div className={styles.content}>{props.children}</div>
      </div>
    </FadeIn>
  )
}
