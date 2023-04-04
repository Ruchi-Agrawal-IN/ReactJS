// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectionItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectionItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];
  // const message = items.length === 0 ? <p> No Item found</p> : null;
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No Item found</p> : null;
  // };

  // const clickHandler = (event: MouseEvent) => {
  //   console.log(event);
  // };
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p> No item found</p> : null} */}
      {/* {message} */}
      {/* {getMessage} */}
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // className="list-group-item"
            //add classes dynamicaly
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) => console.log(item, index)}
            // onClick={clickHandler}
            onClick={() => {
              setSelectedIndex(index);
              onSelectionItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
