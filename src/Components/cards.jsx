import React from "react";
import data from "./data";

export const Cards = () => {
  return (
    <div className="App">
      {data.map((item, i) => {
        return (
         <div>
             <div key={i} className="card">
            <h5 className="card-title"> {item.title} </h5>
            <img className="card-img-top" alt="..." src={item.src} />
            <div className="card-body">
              <h5 className="card-title"> Price {item.price} $</h5>
              <a href={item.links}  target='_blank'><button className="card-text" > Buy </button></a>
            </div>
          </div>
         </div>
        );
      })}
    </div>
  );
};