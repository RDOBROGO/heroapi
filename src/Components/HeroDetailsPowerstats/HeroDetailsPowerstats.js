import './HeroDetailsPowerstats.css';
import * as icon from '../../assets/icons';

function HeroDetailsPowerstats({ powerstats }) {
  let checkData = data => {
    if(data === 'null') return 'unknown';
    else return data;
  }
  return (
    <div className="hero__box hero__box__stats">
      <h2>Powerstats:</h2>
      <div>
          <h3>Combat:</h3>
          <div>
            <p>{checkData(powerstats.combat)}</p>
            <img className='featured__hero__stats__icon' src={icon.combat.default} alt="combat icon" />
          </div>
      </div>
      <div>
          <h3>Durability:</h3>
          <div>
            <p>{checkData(powerstats.durability)}</p>
            <img className='featured__hero__stats__icon' src={icon.durability.default} alt="durability icon" />
          </div>
      </div>
      <div>
          <h3>Intelligence:</h3>
          <div>
            <p>{checkData(powerstats.intelligence)}</p>
            <img className='featured__hero__stats__icon' src={icon.intelligence.default} alt="intelligence icon" />
          </div>
      </div>
      <div>
          <h3>Speed:</h3>
          <div>
            <p>{checkData(powerstats.speed)}</p>
            <img className='featured__hero__stats__icon' src={icon.speed.default} alt="speed icon" />
          </div>
      </div>
      <div>
          <h3>Strength:</h3>
          <div>
            <p>{checkData(powerstats.strength)}</p>
            <img className='featured__hero__stats__icon' src={icon.strength.default} alt="strength icon" />
          </div>
      </div>
    </div>

  );
}

export default HeroDetailsPowerstats;

