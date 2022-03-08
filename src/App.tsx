import {Suspense, useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {FadeSlideIn, Placeholder} from './components'
import {About, Article, Living, Music} from './pages'
import aboutImage from '../assets/images/about.jpg'
import articleImage from '../assets/images/article.jpg'
import livingImage from '../assets/images/living.jpg'
import musicImage from '../assets/images/music.jpg'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
  getAboutSummary,
  getArticleSummary,
  getLivingSummary,
  getMusicSummary,
} from './posts/homeData'

function Section(props: {
  title: string
  pageUrl: string
  image: string
  description: string
  summaries: {
    url: string
    title: string
  }[]
}) {
  const {title, pageUrl, image, description, summaries} = props
  const [loaded, setLoaded] = useState(false)
  const handleLoaded = () => setLoaded(true)

  return (
    <Card className={styles.card}>
      <Link to={{pathname: pageUrl}}>
        <Placeholder loaded={loaded} height={180}>
          <Card.Img onLoad={handleLoaded} height={180} variant="top" src={image} />
        </Placeholder>
        <Card.ImgOverlay className={styles.cardHeader}>
          <Card.Title as="h2">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.ImgOverlay>
      </Link>
      <ListGroup className="list-group-flush">
        {summaries.map(({url, title}, index) => (
          <Link key={index} to={{pathname: url}}>
            <ListGroupItem>{title}</ListGroupItem>
          </Link>
        ))}
      </ListGroup>
    </Card>
  )
}

function Home() {
  return (
    <FadeSlideIn className={styles.container}>
      <Section
        title="主食"
        description="切勿失去对生活的感知力"
        pageUrl="/living"
        image={livingImage}
        summaries={getLivingSummary()}
      />
      <Section
        title="调味料"
        description="为什么不来点音乐？"
        pageUrl="/music"
        image={musicImage}
        summaries={getMusicSummary()}
      />
      <Section
        title="甜品"
        description="爱，原来是一场自我教育"
        pageUrl="/article"
        image={articleImage}
        summaries={getArticleSummary()}
      />
      <Section
        title="来壶茶"
        description="猫猫这么可爱，不点一下吗？"
        pageUrl="/about"
        image={aboutImage}
        summaries={getAboutSummary()}
      />
    </FadeSlideIn>
  )
}

export function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div className={styles.fallback}>加载中...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/article" component={Article} />
          <Route path="/living" component={Living} />
          <Route path="/music" component={Music} />
        </Suspense>
      </Switch>
    </Router>
  )
}
