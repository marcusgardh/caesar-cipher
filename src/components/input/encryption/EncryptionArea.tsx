import React from "react";

export interface EncryptionProps {
  text: string;
  encryptionKey: number;
}

const EncryptionArea: React.FC<EncryptionProps> = ({ text, encryptionKey }) => {
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const encryptedText: string = encrypt(text, encryptionKey);

  function encrypt(t: string, k: number) {
    const message: string[] = t.split("");
    let encryptedMessage: string[] = [];
    let key: number = k;

    for (let i: number = 0; i < message.length; i++) {
      let m: string = message[i].toLowerCase();
      for (let u: number = 0; u < alphabet.length; u++) {
        if (m === alphabet[u]) {
          if (k > 26) {
            key = k - 26;
          }

          if (
            message[i].charCodeAt(0) >= 65 &&
            message[i].charCodeAt(0) <= 90
          ) {
            encryptedMessage.push(alphabet[u + +key].toUpperCase());
          } else {
            encryptedMessage.push(alphabet[u + +key]);
          }
        }

        if (message[i] === " ") {
          encryptedMessage.push(" ");
        }
      }
    }

    return encryptedMessage.join("");
  }

  return (
    <div>
      <span>{encryptedText}</span>
    </div>
  );
};

export default EncryptionArea;
