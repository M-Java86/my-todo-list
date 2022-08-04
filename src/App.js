import './App.css';
import { useState} from "react";

function App() {
  const [currentItem, setCurrentItem] = useState(null);

  const onChangehandler = e => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} onChange={onChangehandler} />
            <button>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
