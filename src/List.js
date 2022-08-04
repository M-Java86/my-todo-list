import "./List.css";

function List(props) {
  return (
    <div>
      {props.itemList.map((itemObj) => {
        return (
          <div className="Item">
           <p>{itemObj.item}</p>
            <button>x</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
