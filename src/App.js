import image from './imgs/p-bg.jpeg';
import {HashRouter, Route, Router, Switch} from 'react-router-dom'
import './app.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <p>hi</p>
      <HashRouter>
        <Nav />
      <Switch>
          <Route component={About} path={[ '/react-portfolio/', '/']} exact/>
          <Route component={Portfolio} path='/portfolio'/>
          <Route component={Contact} path='/contact'/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
