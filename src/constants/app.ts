function getUrl(port: number) {
  return `${
    (import.meta as any).env.DEV
      ? 'https://www.shuzhiwen.com'
      : window.location.origin.replace(/:\d+/, '')
  }:${port}`
}

export interface AppConfig {
  path: string
  url: string
  web: boolean
  mobile: boolean
}

export const appConfigs: AppConfig[] = [
  {path: '/download', url: getUrl(8001), web: true, mobile: true},
  {path: '/app/chart', url: getUrl(9001), web: true, mobile: false},
  {path: '/app/reserve', url: getUrl(9002), web: false, mobile: true},
  {path: '/game', url: getUrl(9004), web: true, mobile: true},
  {path: '*', url: getUrl(7001), web: true, mobile: true},
]
