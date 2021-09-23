import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("search an emoji here👆");

  function emojiInputHandler(event) {
    const textValue = event.target.value;
    var meaning = emojiDictionary[textValue];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <>
      <div className="container">
        <h1>inside outttt</h1>{" "}
        <div>
          {" "}
          <input type="text" onChange={emojiInputHandler} />
        </div>
        <div>
          {" "}
          <h2>{meaning}</h2>
        </div>
        <div className="emojiBox">
          {emojiWeKnow.map((emoji) => (
            <span key={emoji} onClick={() => clickHandler(emoji)}>
              {emoji}
            </span>
          ))}{" "}
        </div>
      </div>
    </>
  );
}
