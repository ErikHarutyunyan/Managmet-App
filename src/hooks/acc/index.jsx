
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Accordion = ({ children }) => {
  let rfVal = useRef(null);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    debugger
    const acc = rfVal.children;
    for (let i = 0; i < acc.length; i++) {
      let a = acc[i];
      a.children[0].onclick = () => a.classList.toggle("active");
    }
  };

  return <div ref={(a) => (rfVal = a)}>{children}</div>;
};

export default Accordion;