import React from "react";
import "../styles/App.css";

function Dishes({ items }) {
    return (
    <div className="items">
      {items.map((item) => (
        <div key={item.id} className="itemDiv">
          <div className="priceImg">
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <h2>{item.price}</h2>
            </div>
          </div>
          <hr />
          <div>{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default Dishes;
