function getUrl(port: number) {
  return `${window.location.origin.replace(/:\d+/, '')}:${port}`
}

export const appConfigs = [
  {path: '/download', url: getUrl(8001), isMobile: false},
  {path: '/app/chart', url: getUrl(9001), isMobile: false},
  {path: '/app/reserve', url: getUrl(9002), isMobile: true},
  {path: '/app/counter', url: getUrl(9003), isMobile: false},
]
