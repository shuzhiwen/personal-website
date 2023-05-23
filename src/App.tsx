import styled from '@emotion/styled'
import {Box} from '@mui/system'
import ParticlesBg from 'particles-bg'
import {Suspense} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {Home} from './pages'
import {About} from './pages/about'
import {Article} from './pages/article'
import {Living} from './pages/living'
import {Music} from './pages/music'

const appConfigs = [
  ['/download', window.location.origin.replace(/:\d+/, '') + ':8001'],
  ['/app/chart', window.location.origin.replace(/:\d+/, '') + ':9001'],
  ['/app/reserve', window.location.origin.replace(/:\d+/, '') + ':9002'],
  ['/app/counter', window.location.origin.replace(/:\d+/, '') + ':9003'],
]

const AppContainer = styled('iframe')({
  width: '100vw',
  height: '100vh',
  border: 'none',
  backgroundColor: 'white',
})

export function App() {
  return (
    <Box>
      <Router>
        <Switch>
          <Suspense fallback={<div className="m-center">加载中...</div>}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/article" component={Article} />
            <Route path="/living" component={Living} />
            <Route path="/music" component={Music} />
            {appConfigs.map(([path, src]) => (
              <Route path={path} key={path}>
                <AppContainer src={src} />
              </Route>
            ))}
          </Suspense>
        </Switch>
      </Router>
      <ParticlesBg type="random" bg={true} />
    </Box>
  )
}
