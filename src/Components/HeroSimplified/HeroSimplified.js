import * as icon from '../../assets/icons';
import './HeroSimplified.css';
import { Link } from "react-router-dom";

function HeroSimplified({ name, imgUrl, powerstats, id }) {
    let checkData = data => {
        if(data === 'null') return '--';
        else return data;
      }
  return (
    <Link className='hero_detailes' to={`/hero/${id}`}>
        <div className='featured__hero'>
            <h2>{name}</h2>
            <img className='featured__hero__img' src={imgUrl} alt={name + 'photo'} />
            <div className='featured__hero__stats'>
            <div>
                <img className='featured__hero__stats__icon' src={icon.combat.default} alt="combat icon" />
                <p>{checkData(powerstats.combat)}</p>
            </div>
            <div>
                <img className='featured__hero__stats__icon' src={icon.durability.default} alt="durability icon" />
                <p>{checkData(powerstats.durability)}</p>
            </div>
            <div>
                <img className='featured__hero__stats__icon' src={icon.intelligence.default} alt="intelligence icon" />
                <p>{checkData(powerstats.intelligence)}</p>
            </div>
            <div>
                <img className='featured__hero__stats__icon' src={icon.speed.default} alt="speed icon" />
                <p>{checkData(powerstats.speed)}</p>
            </div>
            <div>
                <img className='featured__hero__stats__icon' src={icon.strength.default} alt="strength icon" />
                <p>{checkData(powerstats.strength)}</p>
            </div>
            </div>
        </div>
    </Link>
  );
}
export default HeroSimplified;
