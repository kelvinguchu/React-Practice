import React from "react";
import ListItems from "./ListItems";

const Content = ({ items, handleChecked, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ListItems
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List Is Empty</p>
      )}
    </main>
  );
};

export default Content;
