import "./App.css"
import HomePage from "./components/home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TrailerPage from "./components/watch/TrailerPage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Body from "./components/body/Body";

function App() {
  //  Returns the overall site layout
  return (
    <>
      <Router>
        <Header />
        <Body />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/trailerpage/:name' component={TrailerPage} exact/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
