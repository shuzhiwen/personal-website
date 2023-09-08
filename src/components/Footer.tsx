import {Link, Stack} from '@mui/material'

export function Footer() {
  return (
    <Stack width="100%" alignItems="center" pb={1}>
      <Link
        href="https://beian.miit.gov.cn/"
        color="whitesmoke"
        rel="noreferrer"
        target="_blank"
        underline="none"
        fontSize={12}
      >
        浙ICP备20015270号-1
      </Link>
    </Stack>
  )
}
