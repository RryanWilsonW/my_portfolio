import image from './imgs/p-bg.jpeg';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'
import './app.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      <Switch>
          <Route component={About} path='/' exact/>
          <Route component={Portfolio} path='/portfolio'/>
          <Route component={Contact} path='/contact'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
