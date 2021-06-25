import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />
        <br />
        <br />
        {user.name}
        <ul>
          <li>Location: {user.location}</li>
          <li>Food Type: {user.foodType}</li>
          <li>Age: {user.age}</li>
          <li>Likes: {user.likes}</li>
          <li>Twitter Handle: @{user.twitterUsername}</li>
        </ul>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
