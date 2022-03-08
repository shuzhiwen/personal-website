import {PageBox} from '../../components/PageBox'
import styles from './index.module.css'

export function About() {
  return (
    <PageBox>
      <div className={styles.container}>
        <h4>嗯...这是一个个人网站</h4>
        <p />
        <p>我的联系方式</p>
        <p>谷邮: yuwen4012@gmail.com</p>
        <p />
        <h4>如果你也是开发者</h4>
        <p />
        <p>欢迎和我交流</p>
        <p />
        <h4>一个喜欢文科的理科生</h4>
        <p />
        <p>爱好音乐剧、电影、阅读...也喜欢打游戏</p>
      </div>
    </PageBox>
  )
}
