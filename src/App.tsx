import React, { useState } from "react";
import EncryptionArea from "./components/input/encryption/EncryptionArea";
import UserInput from "./components/input/UserInput";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState(0);

  return (
    <div className="App">
      <UserInput getText={setText} getKey={setKey} />
      <EncryptionArea text={text} encryptionKey={key} />
    </div>
  );
};

export default App;
