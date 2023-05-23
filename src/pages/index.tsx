import {Avatar, Box, Card, List, ListItem, Stack, Typography} from '@mui/material'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import aboutImage from '../assets/images/about.jpg'
import articleImage from '../assets/images/article.jpg'
import livingImage from '../assets/images/living.jpg'
import musicImage from '../assets/images/music.jpg'
import {FadeSlideIn, Placeholder} from '../components'
import {Footer} from '../components/Footer'
import {
  aboutSummaryMock,
  articleSummaryMock,
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
    <Card sx={{textDecoration: 'none'}}>
      <Link to={{pathname: pageUrl}}>
        <Placeholder loaded={loaded} height={180}>
          <Box position="relative">
            <Avatar
              sx={{width: 300, height: 180}}
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
          </Box>
        </Placeholder>
      </Link>
      <List>
        {summaries.map(({url, title}, index) => (
          <Link key={index} to={{pathname: url}}>
            <ListItem>{title}</ListItem>
          </Link>
        ))}
      </List>
    </Card>
  )
}

export function Home() {
  return (
    <Stack height="100vh" overflow="auto" justifyContent="space-between">
      <FadeSlideIn
        sx={{
          padding: 8,
          gridGap: 32,
          display: 'grid',
          placeContent: 'center',
          gridTemplateColumns: 'repeat(auto-fill, 256px)',
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
          title="精神食粮"
          description="爱，原来是一场自我教育"
          pageUrl="/article"
          image={articleImage}
          summaries={articleSummaryMock()}
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
    </Stack>
  )
}
