import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/About';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/about' component={() => <div>About</div>} />
          <Route exact path='/service' component={() => <div>Service</div>} />
          <Route exact path='/shedule' component={() => <div>Shedule</div>} />
          <Route exact path='/gallery' component={() => <div>Gallery</div>} />
          <Route exact path='/blog' component={() => <div>Blog</div>} />
          <Route exact path='/contact' component={() => <div>Contact</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
