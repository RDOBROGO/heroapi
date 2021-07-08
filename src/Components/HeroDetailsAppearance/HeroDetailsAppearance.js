import './HeroDetailsAppearance.css';

function HeroDetailsAppearance({ appearance }) {
  return (
    <div className="hero__box hero__box__appearance">
      <h2>Appearance:</h2>
      <div>
        <h3>Gender:</h3>
        <p>{appearance.gender}</p>
      </div>
      <div>
        <h3>Race:</h3>
        <p>{appearance.race}</p>
      </div>
      <div>
        <h3>Height:</h3>
        <p>{appearance.height[1]}</p>
      </div>
      <div>
        <h3>Weight:</h3>
        <p>{appearance.weight[1]}</p>
      </div>
      <div>
        <h3>Eye color:</h3>
        <p>{appearance['eye-color']}</p>
      </div>
      <div>
        <h3>Hair color:</h3>
        <p>{appearance['hair-color']}</p>
      </div>
    </div>
  );
}

export default HeroDetailsAppearance;

