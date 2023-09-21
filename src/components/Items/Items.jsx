import React, { useContext } from "react";
import "./Items.css";
import { ListItem } from "../ListItem/ListItem";
import { FormItems } from "../FormItems/FormItems";
import { CurrentIdContext } from "../../App";

export const Items = () => {
  const { items, getItems } = useContext(CurrentIdContext);

  return (
    <div className="items">
      <h1>Items</h1>
      <FormItems refresh={getItems} />
      <ul class="list-group">
        {items.map((item) => (
          <ListItem
            idItem={item.id}
            itemText={item.itemText}
            comments={item.comments.length}
            refresh={getItems}
          />
        ))}
      </ul>
    </div>
  );
};
