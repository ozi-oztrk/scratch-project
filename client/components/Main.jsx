// import React from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Main() {
  // const [quote, setQuote] = useState([]);

  // useEffect(async () => {
  //   fetch("https://type.fit/api/quotes")
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {})
  //     .catch((err) => {});

  //     fetch('https://www.stands4.com/services/v2/quotes.php', {
  //             mode: 'no-cors',
  //             method: "get",
  //             headers: {
  //                  "Content-Type": "application/json"
  //             }
  //  }).then(result=>{
  //    console.log(result)
  //  })
  // }, []);

  return (
    <div className="bodyDiv">
      <h2 id="welcome">Welcome back to Better Reads!</h2>
      <ul></ul>
    </div>
  );
}
