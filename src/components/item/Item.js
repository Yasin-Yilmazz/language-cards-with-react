import React, { useState } from "react";
import "./Item.css";
const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);

  const { name, img, options } = card;
  const setFront = () => {
    setShowLogo(true);
  };

  return (
    <div
      className="card"
      onClick={() => {
        setShowLogo(!showLogo);
        setTimeout(setFront, 3000);
      }}
    >
      {showLogo ? (
        <div>
          <img src={img} alt="" className="card-logo" />
          <h3 className="card-title">{name} </h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element} </li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
