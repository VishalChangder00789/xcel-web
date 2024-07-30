import React, { useState } from "react";
import "./cell.css";

// double click will allow edit
// single click will select and change toolbar options
// increase decrease the cell size

// handlers
import handler from "./handler/cellClickHandlers";

const Cell = () => {
  const [doubleClicked, setDoubleClicked] = useState(false);
  const [singleClicked, setSingleClicked] = useState(false);
  const [cellValue, setCellValue] = useState("Pre-defined-value from backend");

  return (
    <div>
      {doubleClicked ? (
        <input
          value={cellValue}
          onChange={(e) => handler.doubleClickHandler(e)}
        />
      ) : (
        <div>{cellValue}</div>
      )}
    </div>
  );
};

export default Cell;
