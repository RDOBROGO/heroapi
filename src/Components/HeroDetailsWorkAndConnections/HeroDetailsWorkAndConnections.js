import './HeroDetailsWorkAndConnections.css';

function HeroDetailsWorkAndConnections({ work, connections }) {
  return (
    <div className="hero__box hero__box__workAndConn">
      <h2>Work and connections:</h2>
      <div>
        <h3>Occupation:</h3>
        <p>{work.occupation}</p>
      </div>
      <div>
        <h3>Work base:</h3>
        <p>{work.base}</p>
      </div>
      <div>
        <h3>Group affiliation:</h3>
        <p>{connections['group-affiliation']}</p>
      </div>
      <div>
        <h3>Relatives:</h3>
        <p>{connections.relatives}</p>
      </div>
    </div>
  );
}

export default HeroDetailsWorkAndConnections;

