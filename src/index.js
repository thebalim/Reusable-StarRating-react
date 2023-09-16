import { useState } from "react";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

// outputing the data from starcomponent
// by passing onHandleData prop
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div className="test">
      <div>
        <StarRating onHandleData={setMovieRating} />
      </div>
      <p>This moive has {movieRating} rating</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <StarRating
      color="red"
      size={30}
      defaultRating={3}
      messages={["Terrible", "bad", "average", "good", "Excellent"]}
    />

    <StarRating color="green" size={45} maxRating={7} className="box" />
    <br />
    <Test />
  </React.StrictMode>
);
