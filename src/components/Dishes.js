
import React from "react";

const Dishes = ({ items }) => {
  return (
    <div>
      {items.map((dish) => (
        <div key={dish.id} className="dish-item">
          <img src={dish.img} alt={dish.title} />
          <div>
            <h3>{dish.title}</h3>
            <p>{dish.desc}</p>
            <span>Price: ${dish.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dishes;



