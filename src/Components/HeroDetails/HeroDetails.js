import './HeroDetails.css';
import { getDetailsOfHeroById } from '../../requests'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import HeroDetailsPowerstats from '../HeroDetailsPowerstats/HeroDetailsPowerstats';
import HeroDetailsBiography from '../HeroDetailsBiography/HeroDetailsBiography';
import HeroDetailsAppearance from '../HeroDetailsAppearance/HeroDetailsAppearance';
import HeroDetailsWorkAndConnections from '../HeroDetailsWorkAndConnections/HeroDetailsWorkAndConnections';

function HeroDetails() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [HeroDetailsList, setHeroDetailsList] = useState([]);
  
  useEffect(() => {
    fetchAndRenderHeroDetails(id);
  }, [id])

  const fetchAndRenderHeroDetails = async id => {
    const heroDetails = await getDetailsOfHeroById(id);
      setHeroDetailsList(heroDetails);
      setIsLoading(false);
  }
  const { powerstats } = HeroDetailsList;
  const { biography } = HeroDetailsList;
  const { appearance } = HeroDetailsList;
  const { work } = HeroDetailsList;
  const { connections } = HeroDetailsList;
  return (
    <section className='hero'>
      { !isLoading &&  <div className="container">
          <h1 className='hero__name'>{HeroDetailsList.name}</h1>
          <img className='hero__image' src={HeroDetailsList.imgUrl} alt={HeroDetailsList.name + 'image'} />
          <HeroDetailsPowerstats key={powerstats.id + 'P'} powerstats={powerstats} />
          <HeroDetailsBiography key={biography.id + 'B'} biography={biography} />
          <HeroDetailsAppearance key={appearance.id + 'A'} appearance={appearance} />
          <HeroDetailsWorkAndConnections key={work.id + 'C'} connections={connections} work={work}/>
        </div>
      }
      { isLoading && <div className='loader-container'><Loader /></div>
      }
      
    </section>
  );
}

export default HeroDetails;

