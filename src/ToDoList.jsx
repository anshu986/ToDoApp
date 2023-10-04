import React, { useState } from "react";
import {IoMdAddCircle} from 'react-icons/io'
import ListCom from "./ListCom";
const ToDoList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add an Items"
            onChange={itemEvent}
          />
          <IoMdAddCircle className="newBtn" onClick={listOfItems}>
            <IoMdAddCircle />
          </IoMdAddCircle>

          <br />
          <ol>
            {newitem.map((val, index) => {
              return <ListCom key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;