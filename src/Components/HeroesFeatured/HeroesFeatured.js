import { useEffect, useState } from 'react';
import './HeroesFeatured.css';
import HeroSimplified from '../HeroSimplified/HeroSimplified.js';
import { getBasicHeroInfoById } from '../../requests.js';
import Loader from '../Loader/Loader';

const featuredHeroesIds = [294, 378, 142];

function HeroesFeatured() {
    useEffect(() => {
        fetchAndRenderFeaturedHeroes()
      }, [])
    
      const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
      const [ isLoading, setLoadingState ] = useState(true);
    
      const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
        for(const heroId of featuredHeroesIds) {
          const data = await getBasicHeroInfoById(heroId);
          heroes.push(data);
        }
        setFeaturedHeroesList(heroes);
        setLoadingState(false);
      }

  return (
    <section className='featured'>
      <h1>Featured Heroes</h1>
      { !isLoading && <div className='featured__list'>
          {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
              <HeroSimplified key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id}/>
          ))}
      </div>
      }
      {isLoading && <div className='loader-container'><Loader /></div>}
      
    </section>
  );
}

export default HeroesFeatured;
