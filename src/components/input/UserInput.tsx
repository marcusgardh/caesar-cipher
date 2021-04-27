import React, { useState } from "react";

export interface InputProps {
  getText(text: string): void;
  getKey(key: number): void;
}

const UserInput: React.FC<InputProps> = ({ getText, getKey }) => {
  const [text, setText] = useState("");
  const [key, setKey] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    getText(text);
    getKey(key);

    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          min={0}
          value={key}
          onChange={(e) => setKey(e.target.value as any)}
        />
        <button type="submit">Kryptera</button>
      </form>
    </div>
  );
};

export default UserInput;
