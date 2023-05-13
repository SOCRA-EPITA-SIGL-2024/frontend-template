import React from "react";
import useAppContext from "./AppContext";

function RemoveItemButton({ item }) {
  const { dispatch } = useAppContext();

  return (
    <button
      socra="remove-item"
      onClick={function () {
        dispatch({ type: "REMOVE_BASKET_ITEM", item });
      }}
    >
      Supprimer
    </button>
  );
}

export default RemoveItemButton;
