import image from './imgs/p-bg.jpeg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './app.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route component={About} path='/' exact/>
          <Route component={Portfolio} path='/portfolio' exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
