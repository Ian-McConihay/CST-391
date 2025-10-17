import React from 'react';

function Card(props) {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={props.imgURL} className="card-img-top" alt={props.albumTitle} />
      <div className="card-body">
        <h5 className="card-title">{props.albumTitle}</h5>
        <p className="card-text">{props.albumDescription}</p>
        <button className="btn btn-primary">{props.buttonText}</button>
      </div>
    </div>
  );
}

export default Card;