import axios from "axios";
import React, { useState, useEffect } from "react";

const BASE_URL =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e67";

const Flag = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data:");
        const response = await axios.get(BASE_URL);
        const data = response.data;
        console.log("API Response:", data);
        setWord(data.word);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Word state updated:", word);
  }, [word]);

  return (
    <div className="flag">
      <p>{word && <p>The word is: {word}</p>}</p>
    </div>
  );
};

export default Flag;
