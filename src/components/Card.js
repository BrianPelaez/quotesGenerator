import React from "react";
import { useState } from "react";
import { FaTwitter, FaTumblr, FaQuoteLeft } from "react-icons/fa";

const colors = [
  "rgb(251, 105, 100)",
  "rgb(119, 177, 169)",
  "rgb(155, 89, 182)",
  "rgb(22, 160, 133)",
  "rgb(39, 174, 96)",
  "rgb(71, 46, 50)",
];

const frases = [
  {
    frase:
      "El misterio de la vida no es un problema a resolver, sino una realidad a experimentar ",
    autor: "Duna, Frank Herbert",
  },
  {
    frase:
      "Estar solo no tiene nada que ver con cuantas personas hay alrededor",
    autor: "Revolutionary Road, Richard Yates",
  },
  {
    frase:
      "Sea un hombre o sea más que un hombre. Sea firme con su propósito y firme como una piedra",
    autor: "Frankestein, Mary Shelley",
  },
  {
    frase:
      "El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación",
    autor: "La compañía blanca, Arthur Conan Doyle",
  },
  {
    frase: "Si buscas la perfección nunca estarás contento",
    autor: "Anna Karenina, Leo Tolstoy",
  },
  {
    frase:
      "Mientras el corazón late, mientras el cuerpo y alma siguen juntos, no puedo admitir que cualquier criatura dotada de voluntad tiene necesidad de perder la esperanza en la vida",
    autor: "Viaje al centro de la tierra, Julio Verne",
  },
  {
    frase:
      "No puedo morir aún doctor. Todavía no. Tengo cosas que hacer. Después de todo, tendré una vida entera en la que morir",
    autor: "El Juego del Ángel, Carlos Ruiz Zafón",
  },
  {
    frase: "Tengo esperanza o podría no vivir",
    autor: "La isla del doctor Moreau, H.G. Wells",
  },
];

const Card = () => {
  const [frase, setFrase] = useState(frases[0]["frase"]);
  const [autor, setAutor] = useState(frases[0]["autor"]);

  const handleClick = (e) => {
    const frase = document.getElementById("text");
    const author = document.getElementById("author");
    const btn = document.getElementsByClassName("btn");
    const rnd_color = Math.floor(Math.random() * 6);
    const btn_quote = document.querySelector("#new-quote");

    console.log("CLICK");
    var i = 0;
    frase.style.opacity = 0;
    author.style.opacity = 0;
    btn_quote.disabled = true;
    const rnd = Math.floor(Math.random() * frases.length);
    let interval = setInterval(() => {
      frase.style.opacity = 1;
      author.style.opacity = 1;

      if (i === 0) {
        setFrase(frases[rnd]["frase"]);
        setAutor(frases[rnd]["autor"]);
        console.log({ rnd: rnd });
      }
      console.log(i++);
      if (i === 2) {
        btn_quote.disabled = false;
        clearInterval(interval);
      }
    }, 2000);
    document.body.style.backgroundColor = colors[rnd_color];

    frase.style.color = colors[rnd_color];
    author.style.color = colors[rnd_color];

    for (let boton of btn) {
      boton.style.backgroundColor = colors[rnd_color];
      boton.style.borderColor = colors[rnd_color];
    }

    //onsole.log(btn)
  };

  return (
    <div id="quote-box">
      <div className="container-info">
        <span>
          <blockquote>
            <p id="text">
              <FaQuoteLeft />
              {frase}
            </p>
          </blockquote>
        </span>
        <p id="author">- {autor}</p>
        <div className="buttons">
          <div className="buttons-redes">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${frase}`}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <FaTwitter />
            </a>
            <a
              href="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
              className="btn"
            >
              <FaTumblr />
            </a>
          </div>
          <button id="new-quote" className="btn" onClick={handleClick}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
