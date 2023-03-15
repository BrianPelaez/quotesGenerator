import "./index.css";
import Card from "./components/Card";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [frase, setFrase] = useState("");
  const [autor, setAutor] = useState("");

  const getQuote = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "800380168cmshe6741ca9d3e413ap1e8780jsn4f551be94d31",
        "X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
      },
    };

   await fetch(
      "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0]);
        setFrase(response[0].quote);
        setAutor(response[0].author);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="App">
      {frase ? <Card frase={frase} autor={autor} getQuote={getQuote} /> : null}
    </div>
  );
}

export default App;
