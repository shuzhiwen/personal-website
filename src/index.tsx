import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Loading} from './components'
import {FullStack, SubAppContainer} from './components/Container'
import {appConfigs} from './constants/app'
import './index.css'
import {Home} from './pages'
import {About} from './pages/about'
import {Article} from './pages/article'
import {Living} from './pages/living'
import {Music} from './pages/music'

ReactDOM.render(
  <React.StrictMode>
    <FullStack position="fixed">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/article" component={Article} />
            <Route path="/living" component={Living} />
            <Route path="/music" component={Music} />
            {appConfigs.map((item) => (
              <Route path={item.path} key={item.path}>
                <SubAppContainer {...item} />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </FullStack>
  </React.StrictMode>,
  document.getElementById('root')
)
