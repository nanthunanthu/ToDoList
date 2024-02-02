import React, { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("key")) || [
      {
        id: 1,
        text: "todo",
        box: true,
      },
    ]
  );
  const saveToLocalStorage = (updatedList) => {
    localStorage.setItem("key", JSON.stringify(updatedList));
  };

  const handleCheckboxChange = (id) => {
    setList((prevList) => {
      const updatedList = prevList.map((task) => {
        if (task.id === id) {
          return { ...task, box: !task.box };
        }
        return task;
      });
      saveToLocalStorage(updatedList);
      return updatedList;
    });
  };
  const handleDelete = (id) => {
    setList((prevList) => {
      const updatedList = prevList.filter((task) => task.id !== id);
      saveToLocalStorage(updatedList);
      return updatedList;
    });
  };
  const Elements = () => {
    if (input.trim() !== "") {
      const ran = Math.random() * 100;
      setList((prevList) => [
        ...prevList,
        { id: ran, text: input, box: true },
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    saveToLocalStorage(list);
  }, [list]);

  return (
    <>
    <h1 className="heading">TO-DO LIST</h1>
      <input
        id="input"
        value={input}
        type="text"
        placeholder="Enter Here"
        onChange={(e) => setInput(e.target.value)}
        className="container"
      ></input>
      <button className="container" onClick={Elements}>Add</button>
      <ul className="list">
        {list.map((item) => (
          <li key={item.id}>
            <input
              name="checkbox"
              checked={item.box}
              onChange={() => handleCheckboxChange(item.id)}
              type="checkbox"
            />
            <label>{item.text}</label>
            <button className="container"onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
