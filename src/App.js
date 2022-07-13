import React, { useState } from "react";
import "./App.css";

// import components
import Header from "./components/header/Header";
import Course from "./components/courses/Course";

const App = () => {
  // * product data
  const [courses, setCourses] = useState([
    { title: "react.js", hours: 40, teacher: "saheb", price: 49 },
    { title: "node.js", hours: 30, teacher: "saheb", price: 69 },
    { title: "javascript", hours: 35, teacher: "hamed", price: 29 },
    { title: "next.js", hours: 60, teacher: "hamed", price: 59 },
  ]);

  // ! apply discount to all the courses 
  const applyDiscount = () => {
    setCourses([
      { title: "react.js", hours: 40, teacher: "saheb", price: 29 },
      { title: "node.js", hours: 30, teacher: "saheb", price: 49 },
      { title: "javascript", hours: 35, teacher: "hamed", price: 9 },
      { title: "next.js", hours: 60, teacher: "hamed", price: 39 },
    ]);
  }

  return (
    <div className="container">
      <Header />
      <div className="dicount-part">
        <p className="dicount">
          courses have 20$ discount 
        </p>
        {/* when user click on this btn , discount apply to all the courses */}
        <button onClick={applyDiscount} className="apply-discount">apply discount</button>
      </div>
      <div className="courses">
        {courses.map((course) => {
          return (
            <Course 
              title={course.title} 
              hours={course.hours} 
              teacher={course.teacher} 
              price={course.price} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
