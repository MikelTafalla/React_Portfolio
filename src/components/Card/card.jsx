import React from "react";
import "./card.css"

const Card = (props) => {
  return (
  
    <div  className="card" style={{width: 18 + "rem"}}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.client}<br></br>
        <span><a href={props.repo} rel="noopener noreferrer" target="_blank">{props.click}</a></span></p>
        
      </div>
    </div>
    
  );
}
export default Card;
