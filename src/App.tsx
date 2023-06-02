import ParticlesBg from 'particles-bg'
import {Suspense} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Fallback} from './components'
import {AppContainer, FullStack} from './components/Container'
import {appConfigs} from './constants/app'
import {Home} from './pages'
import {About} from './pages/about'
import {Article} from './pages/article'
import {Living} from './pages/living'
import {Music} from './pages/music'

export function App() {
  return (
    <FullStack position="fixed">
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Fallback />}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/article" component={Article} />
            <Route path="/living" component={Living} />
            <Route path="/music" component={Music} />
            {appConfigs.map(({path, url, web, mobile}) => (
              <Route path={path} key={path}>
                <AppContainer src={url} web={web} mobile={mobile} />
              </Route>
            ))}
          </Suspense>
        </Switch>
      </BrowserRouter>
      <ParticlesBg type="square" bg />
    </FullStack>
  )
}
