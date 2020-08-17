import React from "react";

const Jumbo = (props) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{props.name}</h1>
      <p className="lead">{props.message}</p>
      <hr className="my-4" />
      <p>{props.text}</p>
      <a className="btn btn-success btn-lg" href="/" role="button">See my projects</a>
      <a className="btn btn-primary btn-lg" href="https://drive.google.com/file/d/1FXT9ZzMn6tvFQcJbAZbvFK_7vAgi1Cir/view" target="_blank" rel="noopener noreferrer" role="button">Online Resume</a>
    </div>
  )
}
export default Jumbo;