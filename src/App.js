import React,{ useState } from 'react';
import './App.css';

function App() {
  const [inputList, setInputList] = useState([{ firstName: ""}]);

  // input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // Add button
  const handleAddClick = () => {
    var cloned = [...inputList, {firstName: ""}];
    setInputList(cloned);
  };

  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div key={i}>
            <input
              name="firstName"
              placeholder="Enter Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
           
            <div>
              {inputList.length !== 1 && 
              <button onClick={() => handleRemoveClick(i)}>Remove</button>}
              <div>{inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
