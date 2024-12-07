import { useState } from "react";
export default function SearchBar({ action }) {
  [inputText, setInputText] = useState("");
  return (
    <>
      <input
        value={inputText}
        placeholder="your dream destination here"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          action(inputText);
          setInputText("");
        }}
      >
        {" "}
        Search{" "}
      </button>
    </>
  );
}
