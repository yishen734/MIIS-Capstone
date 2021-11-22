import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavigationBar/NavBar'
import PageMain from './pages/PageMain/PageMain'
import './App.css'

function App() {
  // Initializing login state

  return (
    <Router>
      {/* <Switch>
        <Route exact path="/"> */}
      <NavBar />
      <PageMain />
      {/* </Route>
      </Switch> */}
    </Router>
  )
}

export default App
