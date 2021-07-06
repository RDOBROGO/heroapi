import { useEffect, useState } from 'react';
import './HeroesFeatured.css';
import HeroesSimplified from '../HeroesSimplified/HeroesSimplified.js';
import { getBasicHeroInfoById } from '../../requests.js';

const featuredHeroesIds = [294, 378, 142];

function HeroesFeatured() {

    useEffect(() => {
        fetchAndRenderFeaturedHeroes()
      }, [])
    
      const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
    
      const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
        for(const heroId of featuredHeroesIds) {
          const data = await getBasicHeroInfoById(heroId);
          heroes.push(data);
        }
        setFeaturedHeroesList(heroes);
      }

  return (
    <section className='featured featured__list'>
        {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
            <HeroesSimplified name={name} imgUrl={imgUrl} powerstats={powerstats}/>
        ))}
        </section>
  );
}

export default HeroesFeatured;
