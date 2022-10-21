import React from "react";

const ListItem = ({ items ,chooseGlasse}) => {
  return (
    <div className="container list">
      <div className="inner-list">
        <ul className="list-item">
          {items.map((item) => {
            
            return (
              <li key={item.id} className="glasses-item" onClick={()=>chooseGlasse(item)}>
                <img src={item.url} alt="" width="100px" height="50px" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListItem;
