import React from "react";

const ListItem = ({ list }) => {
  return (
    <>
      <ul className="list">
        {list.map((child, index) => {
          return (
            <li className="item" key={index}>
              {child}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListItem;
