import './App.css';
import { useState} from "react";
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateitemList] = useState([]);
   const onChangehandler = e => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateitemList([...itemList, {item :currentItem, key: Date.now()}]);
    currentItem("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input 
            placeholder="Add item"
            value={currentItem} 
            onChange={onChangehandler} 
            />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateitemList={updateitemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
