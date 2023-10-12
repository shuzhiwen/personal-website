import {Card, Divider, List, ListItem, Stack, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import livingImage from '../assets/images/bg1.jpg'
import musicImage from '../assets/images/bg2.jpg'
import articleImage from '../assets/images/bg3.jpg'
import aboutImage from '../assets/images/bg4.jpg'
import {FadeSlideIn, Footer, FullStack, Github} from '../components'
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
  summaries: {
    url: string
    title: string
  }[]
}) {
  const {title, pageUrl, image, summaries} = props

  return (
    <Card sx={{width: 260}}>
      <Link to={{pathname: pageUrl}}>
        <Stack
          sx={{
            position: 'relative',
            background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)),url(${image})`,
            backgroundSize: 'cover',
            width: '100%',
            height: 180,
          }}
        >
          <Stack position="absolute" top={0} left={0} spacing={1} p={2}>
            <Typography variant="h5" color="whitesmoke" fontWeight="bold">
              {title}
            </Typography>
          </Stack>
        </Stack>
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
      <Github />
      <FadeSlideIn
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: isMobile ? 4 : 8,
          gap: 6,
        }}
      >
        <Section
          title="生活碎片"
          pageUrl="/living"
          image={livingImage}
          summaries={livingSummaryMock()}
        />
        <Section
          title="兴趣爱好"
          pageUrl="/music"
          image={musicImage}
          summaries={musicSummaryMock()}
        />
        <Section
          title="玩玩小游戏"
          pageUrl="/game"
          image={articleImage}
          summaries={gameSummaryMock()}
        />
        <Section
          title="关于我"
          pageUrl="/about"
          image={aboutImage}
          summaries={aboutSummaryMock()}
        />
      </FadeSlideIn>
      <Footer />
    </FullStack>
  )
}
