import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Color.css";

function Color({ hex, color }) {
  const navigate = useNavigate();
  if (!hex) {
    navigate("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;
