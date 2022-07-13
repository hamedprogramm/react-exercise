import React from "react";

const Course = (props) => {
  return (
    <div className="course">
      <div className="course-name">
        <h1 className="c-name">{props.title}</h1>
      </div>
      <div className="course-info">
        <p className="c-hour">Hour : {props.hours} hours</p>
        <p className="c-teach">Teacher : {props.teacher} {(props.teacher === 'saheb') ? '(confirmed)' : ''} </p>
        <p className="c-price">price : {props.price} $</p>
      </div>
      <div className="buy-btn">
        <button className="buy">buy now !</button>
      </div>
    </div>
  );
};

export default Course;
