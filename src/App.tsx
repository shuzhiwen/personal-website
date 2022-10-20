import {Box} from '@mui/system'
import {Suspense} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './pages'
import {About} from './pages/About'
import {Article} from './pages/Article'
import {Living} from './pages/Living'
import {Music} from './pages/Music'
import ParticlesBg from 'particles-bg'

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
          </Suspense>
        </Switch>
      </Router>
      {/* <ParticlesBg type="random" bg={true} /> */}
    </Box>
  )
}
