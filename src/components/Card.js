import { FaTwitter, FaTumblr, FaQuoteLeft } from "react-icons/fa";

const colors = [
  "rgb(251, 105, 100)",
  "rgb(119, 177, 169)",
  "rgb(155, 89, 182)",
  "rgb(22, 160, 133)",
  "rgb(39, 174, 96)",
  "rgb(71, 46, 50)",
];

const Card = (props) => {
  const handleClick = (e) => {
    const frase = document.getElementById("text");
    const author = document.getElementById("author");
    const btn = document.getElementsByClassName("btn");
    const rnd_color = Math.floor(Math.random() * colors.length);
    const btn_quote = document.querySelector("#new-quote");

    // ANIMACION OPACIDAD START
    var i = 0;
    frase.style.opacity = 0;
    author.style.opacity = 0;
    btn_quote.disabled = true;

    let interval = setInterval(() => {
      if (i === 2) props.getQuote(); // GET NUEVO QUOTE
      if (i === 3) {
        frase.style.opacity = 1;
        author.style.opacity = 1;
      }
      i++;
      //console.log(i);
      if (i === 4) {
        btn_quote.disabled = false;
        clearInterval(interval);
      }
    }, 1000);
    // ANIMACION OPACIDAD END

    // Asignación de colores START
    document.body.style.backgroundColor = colors[rnd_color];
    frase.style.color = colors[rnd_color];
    author.style.color = colors[rnd_color];
    for (let boton of btn) {
      boton.style.backgroundColor = colors[rnd_color];
      boton.style.borderColor = colors[rnd_color];
    }
    // Asignación de colores END
  };

  return (
    <div id="quote-box">
      <div className="container-info">
        <span>
          <blockquote>
            <p id="text">
              <FaQuoteLeft />
              {props.frase}
            </p>
          </blockquote>
        </span>
        <p id="author">- {props.autor}</p>
        <div className="buttons">
          <div className="buttons-redes">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${props.frase}`}
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
