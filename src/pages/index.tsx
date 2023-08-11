import {Avatar, Card, Divider, List, ListItem, Stack, Typography} from '@mui/material'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import aboutImage from '../assets/images/about.jpg'
import articleImage from '../assets/images/article.jpg'
import livingImage from '../assets/images/living.jpg'
import musicImage from '../assets/images/music.jpg'
import {FadeSlideIn, Footer, Placeholder} from '../components'
import {FullStack} from '../components/Container'
import {isMobile} from '../constants/env'
import {
  aboutSummaryMock,
  gameSummaryMock,
  livingSummaryMock,
  musicSummaryMock,
} from '../constants/mock'

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
    <Card sx={{width: 260}}>
      <Link to={{pathname: pageUrl}}>
        <Placeholder loaded={loaded} height={180}>
          <Stack position="relative">
            <Avatar
              sx={{width: '100%', height: '100%'}}
              variant="square"
              onLoad={handleLoaded}
              src={image}
            />
            <Stack position="absolute" top={0} left={0} spacing={1} p={2} color="white">
              <Typography variant="h4" fontFamily="pangmen">
                {title}
              </Typography>
              <Typography variant="h6" fontFamily="pangmen">
                {description}
              </Typography>
            </Stack>
          </Stack>
        </Placeholder>
      </Link>
      <List>
        <Stack divider={<Divider />}>
          {summaries.map(({url, title}, index) => (
            <Link key={index} to={{pathname: url}} style={{textDecoration: 'none'}}>
              <ListItem>{title}</ListItem>
            </Link>
          ))}
        </Stack>
      </List>
    </Card>
  )
}

export function Home() {
  return (
    <FullStack justifyContent="space-between">
      <FadeSlideIn
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: isMobile ? 4 : 8,
          gap: 4,
        }}
      >
        <Section
          title="生活碎片"
          description="切勿失去对生活的感知力"
          pageUrl="/living"
          image={livingImage}
          summaries={livingSummaryMock()}
        />
        <Section
          title="兴趣爱好"
          description="为什么不来点音乐？"
          pageUrl="/music"
          image={musicImage}
          summaries={musicSummaryMock()}
        />
        <Section
          title="玩玩小游戏"
          description="精神的乌托邦"
          pageUrl="/game"
          image={articleImage}
          summaries={gameSummaryMock()}
        />
        <Section
          title="关于我"
          description="猫猫这么可爱，不点一下吗？"
          pageUrl="/about"
          image={aboutImage}
          summaries={aboutSummaryMock()}
        />
      </FadeSlideIn>
      <Footer />
    </FullStack>
  )
}
