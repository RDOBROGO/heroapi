import './App.css';
import Nav from './Components/Nav/Nav.js';
import HeroFeatured from './Components/HeroesFeatured/HeroesFeatured.js';
import HeroDetails from './Components/HeroDetails/HeroDetails.js';
import SearchView from './Components/SearchView/SearchView.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
                <SearchView />
              </Route>
              <Route path="/hero/:id">
                <HeroDetails />
              </Route>
              <Route path="/save/:id">
                <HeroDetails />
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
