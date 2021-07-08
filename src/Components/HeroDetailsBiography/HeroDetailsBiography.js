import './HeroDetailsBiography.css';

function HeroDetailsBiography({ biography }) {

  const name = () => {
    if(biography['full-name'] === '') return biography.name;
    else return biography['full-name'];
  }
  return (
    <div className="hero__box hero__box__biography">
      <h2>Biography:</h2>
      <div>
        <h3>Full name:</h3>
        <p>{name()}</p>
      </div>
      <div>
        <h3>Alias:</h3>
        <p>{biography.aliases.map((alias,index=0) => {
          if(index === 0) return <span key={index}>{alias}</span>
          else return <span key={index}> | {alias}</span>})
      }</p>
      </div>
      <div>
        <h3>Place of birth:</h3>
        <p>{biography['place-of-birth']}</p>
      </div>
      <div>
        <h3>Alter-egos:</h3>
        <p>{biography['alter-egos']}</p>
      </div>
      <div>
        <h3>First-appearance:</h3>
        <p>{biography['first-appearance']}</p>
      </div>
      <div>
        <h3>Alignment:</h3>
        <p>{biography.alignment}</p>
      </div>
    </div>
  );
}

export default HeroDetailsBiography;

