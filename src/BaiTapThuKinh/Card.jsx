import React from "react";

const Card = ({item}) => {
  return (
    <div className="container item-detail">
      <div className="col-md-2">
        <div className="card">
          <div className="card-wrapper">
            <div className="card-footer">
              
              <h4 className="card-title">{item.name}</h4>
              <h3 className="card-text">{item.price}</h3>
              <span>{item.desc}</span>
            </div>
            <div className="card-image">
              <img src={item.url} alt={item.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
