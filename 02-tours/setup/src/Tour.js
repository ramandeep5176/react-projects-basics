import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <article className="single-tour">
        <img className="image" src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h3 className="tour-price">{price}</h3>
          </div>
          <p>{info}</p>
          <button className="delete-btn">delete</button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
