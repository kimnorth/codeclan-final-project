import React, {component} from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import Main from './containers/Main.jsx'
import Lobby from './containers/Lobby.jsx'
import Game from './containers/Game.jsx'
import GameOver from './containers/GameOver.jsx'

const main = document.getElementById('main')

ReactDOM.render(

    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game" component={Game} />
        <Route path="/gameover" component={GameOver} />
      </div>
    </Router>,
    main

)