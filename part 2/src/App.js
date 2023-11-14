import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

function App() {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, updateColors] = useState(initialColors);

  function handleAdd(newColorObj) {
    updateColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />}></Route>
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={handleAdd} />}
        ></Route>
        <Route
          path="/colors/:color"
          element={<CurrentColor colors={colors} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
function CurrentColor(props) {
  const { color } = useParams();
  const hex = props.colors[color];
  return <Color {...props} hex={hex} color={color} />;
}

export default App;
