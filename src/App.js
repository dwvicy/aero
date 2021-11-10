import React from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"
import Gender from "./Gender"
import Landing from "./Landing"
import Quizler from "./Quizler"
import { AnimatedSwitch } from "react-router-transition"
import Info from "./pages/info"

function App() {
  return (
    <div>
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/gen">
            <Gender />
          </Route>
          <Route path="/quiz">
            <Quizler />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </AnimatedSwitch>
      </Router>
    </div>
  )
}

export default App
