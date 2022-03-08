import styles from './index.module.css'
import emptyImage from '../../../assets/images/crying.svg'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={emptyImage} />
      <span>这里什么也没有...</span>
    </div>
  )
}
