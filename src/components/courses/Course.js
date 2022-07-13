import React, { useState } from "react";

const Course = ({ title, hours, teacher, price }) => {
  const [change, setChange] = useState({
    showMe: false,
  });

  const [count, setCount] = useState(1);

  const changeEl = () => {
    setChange({
      showMe: true,
    });
  };

  const addOneHandler = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const minusOneHandler = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className="course">
      <div className="course-name">
        <h1 className="c-name">{title}</h1>
      </div>
      <div className="course-info">
        <p className="c-hour">Hour : {hours} hours</p>
        <p className="c-teach">
          Teacher : {teacher} {teacher === "saheb" ? "(confirmed)" : ""}
        </p>
        <p className="c-price">price : {price} $</p>
      </div>
      <div className="buy-btn">
        {(change.showMe === false || count == 0) ? (
          <button onClick={changeEl} className="buy">
            buy now !
          </button>
        ) : (
          <>
            <button onClick={addOneHandler} className="up">
              +
            </button>
            <p className="quantityShow">{count}</p>
            <button onClick={minusOneHandler} className="minus">
              -
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Course;
