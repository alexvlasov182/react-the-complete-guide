import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}