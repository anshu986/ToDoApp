import React, { useState } from "react";
import {AiFillDelete} from 'react-icons/ai'

const ListCom = (props) => {
  const [line, setLine] = useState(false);
    const cutIt = () => {
    setLine(true);
  };
  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <AiFillDelete className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};




export default ListCom;