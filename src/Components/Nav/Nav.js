import { useEffect, useState } from 'react';
import logo from '../../assets/img/nav__logo.png'
import './Nav.css';
import { Link } from "react-router-dom";
import { searchHeroesByName } from '../../requests'

function Nav() {
  const [ searchInputValue, setSearchInputValue ] = useState('');
  const [ promptList, setpromptList ] = useState([]);

  useEffect(() => {
    setpromptList([]);
    searchHeroesByName(searchInputValue).then(searchResults => {
      const { data } = searchResults;
      if (data.error) {
        return;
      }

      const { results } = data;
      let limitedPromptList = [];
      for(let i=0; i<results.length && i<5 ; i++) {
        if(limitedPromptList.indexOf(results[i].name) === -1) limitedPromptList.push(results[i].name);
      }
      setpromptList(limitedPromptList);
    })
    
  }, [searchInputValue])

  return (
    <nav className="nav">
    <div className="container">
      <Link to="/"><img className="nav__logo" onClick={() => {setpromptList([]); setSearchInputValue('')}} src={logo} alt="Superhero Database" /></Link>
      <div className="nav__search">
        <input onChange={event => setSearchInputValue(event.target.value)} value={searchInputValue} type="text" name="search" autoComplete="off" />
        <Link to={`/search/${searchInputValue}`}><button>find hero!</button></Link>
      </div>
        <div className="promptBox" onClick={() => {setpromptList([]); setSearchInputValue('')}}>
          {promptList.map(prompt => <Link key={prompt} to={`/search/${prompt}`}><p name="search_prompt">{prompt}</p></Link>)}
        </div>
    </div>
  </nav>
  );
}

export default Nav;

