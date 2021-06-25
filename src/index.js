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
        <h3>{user.name}</h3>
        <p>
          <strong>Location</strong>
          {user.location}
        </p>
        <p>
          <strong>Eats</strong>
          {user.foodType}
        </p>
        <p>
          <strong>Age</strong>
          {user.age}
        </p>
        <p>
          <strong>Likes</strong>
          {user.likes}
        </p>
        <p>
          <strong>Twitter</strong>
          <a href={`http://www.twitter.com/${user.twitterUsername}`}>
            @{user.twitterUsername}
          </a>
        </p>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
