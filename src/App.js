import './App.css';
import Nav from './Components/Nav/Nav.js';
import HeroFeatured from './Components/HeroFeatured/HeroesFeatured.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <div className='container'>
            <Switch>
              <Route exact path="/">
                <HeroFeatured />
              </Route>
              <Route path="/search/:name">
              </Route>
              <Route path="/hero/:id">
              </Route>
            </Switch>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
