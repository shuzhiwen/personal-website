import {Stack, styled} from '@mui/system'
import {Typography as MuiTypography} from '@mui/material'
import {ContentBox} from '../../components'

const Typography = styled(MuiTypography)({
  fontFamily: 'pixel',
  fontWeight: 'bold',
})

export function About() {
  return (
    <ContentBox>
      <Stack spacing={2} p={3}>
        <Typography variant="h6">嗯...这是一个个人网站</Typography>
        <Typography>我的联系方式</Typography>
        <Typography>谷邮: yuwen4012@gmail.com</Typography>
        <Typography variant="h6">如果你也是开发者</Typography>
        <Typography>欢迎和我交流</Typography>
        <Typography variant="h6">一个喜欢文科的理科生</Typography>
        <Typography>爱好音乐剧、电影、阅读...也喜欢打游戏</Typography>
      </Stack>
    </ContentBox>
  )
}
