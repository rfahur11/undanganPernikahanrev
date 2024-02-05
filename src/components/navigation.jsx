// src/components/Navigation.jsx
import React from "react";

const Navigation = ({ navigateTo }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => navigateTo("hero")}>Hero Section</li>
        <li onClick={() => navigateTo("name")}>Section Nama</li>
        <li onClick={() => navigateTo("timePlace")}>
          Section Waktu dan Tempat
        </li>
        <li onClick={() => navigateTo("footer")}>Footer</li>
      </ul>
    </nav>
  );
};

export default Navigation;
