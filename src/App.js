import './App.css';
import Nav from './Components/Nav/Nav.js';
import HeroFeatured from './Components/HeroFeatured/HeroesFeatured.js';

function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <div className='container'>
          <HeroFeatured />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
