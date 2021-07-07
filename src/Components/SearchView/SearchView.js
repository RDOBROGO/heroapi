import './SearchView.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { searchHeroesByName } from '../../requests.js'
import HeroesSimplified from '../HeroesSimplified/HeroesSimplified';
import Loader from '../Loader/Loader.js';

function SearchView() {
  const [ searchList, setSearchListContent ] = useState([]);
  const [ isLoading, setLoadingState ] = useState(true);
  const {name} = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then(searchResults => {
      const { data } = searchResults;
  
      if (data.error) {
        return;
      }
  
      const { results } = data;
      setSearchListContent(results);
      setLoadingState(false);
    })
  }, [name]);

  return (
    <>
    { !isLoading && (<section className='search'>
    {searchList.map(({powerstats, image, name, id}) => <HeroesSimplified key={id} powerstats={powerstats} imgUrl={image.url} name={name} id={id} />)}
  </section>
  )
  } {
    isLoading && <Loader />
  }
</>
    
  );
}

export default SearchView;
