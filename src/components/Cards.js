import React from "react";
import { useState } from "react";

const Cards = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const description = readMore ? info : `${info.substring(0, 200)}...`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card">
      <div className="card-info">
        <div>
          <img className="image" src={image}></img>
        </div>
        <div className="tour-details">
          <div className="tour-price">Rs.{price}</div>
          <div className="tour-name">{name}</div>
        </div>
        <div className="description">
          {description}
          <span onClick={readMoreHandler} className="read-more">
            {readMore ? "Show Less" : "Read More"}
          </span>
        </div>
      </div>
      <div>
        <button className="btn-red" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Cards;
