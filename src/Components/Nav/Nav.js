import { useEffect, useState } from 'react';
import logo from '../../assets/img/nav__logo.png'
import './Nav.css';
import { Link } from "react-router-dom";
import { searchHeroesByName } from '../../requests'

function Nav() {
  const [ searchInputValue, setSearchInputValue ] = useState('');
  const [ promptList, setpromptList ] = useState([]);

  useEffect(() => {
    searchHeroesByName(searchInputValue).then(searchResults => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;
      let limitedPromptList = [];
      for(let i=0; i<results.length && i<5 ; i++) {
        limitedPromptList.push(results[i].name);
      }
      setpromptList(limitedPromptList);
    })
  }, [searchInputValue])

  return (
    <nav className="nav">
    <div className="container">
      <Link to="/"><img className="nav__logo" onClick={event => {setpromptList([]); setSearchInputValue('')}} src={logo} alt="Superhero Database" /></Link>
      <div className="nav__search">
        <input onChange={event => setSearchInputValue(event.target.value)} value={searchInputValue} type="text" name="search" />
        <Link to={`/search/${searchInputValue}`} onClick={event => {setpromptList([]); setSearchInputValue('')}}><button>find hero!</button></Link>
      </div>
      <div className="promptBox">
        {promptList.map(prompt => <p onClick={event => setSearchInputValue(event.target.outerText)}>{prompt}</p>)}
      </div>
    </div>
  </nav>
  );
}

export default Nav;

