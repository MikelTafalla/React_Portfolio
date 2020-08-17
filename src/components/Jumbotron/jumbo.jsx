import React from "react";
import "./jumbo.css"

const Jumbo = (props) => {
  return (
    <div className="jumbotron">
      <h1 className={props.titleName}>{props.name}</h1>
      <p className={props.messagecss}>{props.message}</p>
      <hr className="my-4" />
      <p>{props.text}</p>
      <a id={props.centered} className="btn btn-success btn-lg" href={props.href1} role="button">{props.button1}</a>
      <a id={props.hide} className="btn btn-primary btn-lg" href={props.href2} target="_blank" rel="noopener noreferrer" role="button">{props.button2}</a>
    </div>
  )
}
export default Jumbo;