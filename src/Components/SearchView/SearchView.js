import React, { useState, useEffect } from 'react';
import HeroSimplfied from '../HeroSimplified/HeroSimplified';
import './SearchView.css';
import { searchHeroesByName } from '../../requests';
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';

function SearchView() {
  const [ searchList, setSearchListContent ] = useState([]);
  const [ isLoading, setLoadingState ] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then(searchResults => {
      const { data } = searchResults;

      if (data.error) {
        setLoadingState(false);
        setSearchListContent([]);
        return;
      }

      const { results } = data;
      setSearchListContent(results);
      setLoadingState(false);
    })
  }, [name]);

  return (
    <>
      { !isLoading && 
        (<section className='search'>
          {
          searchList.length > 0 && searchList.map(({powerstats, image, name, id}) => <HeroSimplfied key={id} powerstats={powerstats} imgUrl={image.url} name={name} id={id}/>)
          }
          {
          searchList.length === 0 && <p>The hero does not exist!</p>
          }
        </section>)
      } {
        isLoading && <Loader/>
      }
    </>
  );
}

export default SearchView;
