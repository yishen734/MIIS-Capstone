import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageMain from './pages/PageMain/PageMain'
import './App.css'

function App() {
  // Initializing login state

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PageMain />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
