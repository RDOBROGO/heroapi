import './HeroesSimplified.css';
import { Link } from "react-router-dom";

function HeroesSimplified({ name, imgUrl, powerstats, id }) {
  return (
    <Link className='hero_detailes' to={`/heroes/${id}`}>
        <div className='featured__hero'>
            <h2>{name}</h2>
            <img className='featured__hero__img' src={imgUrl} alt={name + 'photo'} />
            <div className='featured__hero__stats'>
            <div>
                <p>{powerstats.combat}</p>
            </div>
            <div>
                <p>{powerstats.durability}</p>
            </div>
            <div>
                <p>{powerstats.intelligence}</p>
            </div>
            <div>
                <p>{powerstats.speed}</p>
            </div>
            <div>
                <p>{powerstats.strength}</p>
            </div>
            </div>
        </div>
    </Link>
  );
}
export default HeroesSimplified;
