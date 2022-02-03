import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(people[index]);

  const no = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  // onclick
  function clickNext(index) {
    setIndex((index) => {
      let newIndex = index + 1;
      return no(newIndex);
    });
  }
  function clickPrev() {
    setIndex((index) => {
      let newIndex = index - 1;
      return no(newIndex);
    });
  }

  return (
    <>
      <div className="container">
        <h2>{name}</h2>
        <h3>{job}</h3>

        <img className="imgg" src={image} alt="" />
        <p>{text}</p>
      </div>
      <FaChevronRight onClick={clickNext} /> <br />
      <br />
      <FaChevronLeft onClick={clickPrev} />
      <FaQuoteRight />
    </>
  );
};

export default Review;
