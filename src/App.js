import './App.css';
import React, {useState} from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <button><FacebookShareButton url={quote.content+`${'\n'}`+quote.author} quote='facebook'>
                  <FacebookIcon size={32} round={true} /></FacebookShareButton>
          </button>
          <button><TwitterShareButton url={quote.content+`${'\n'}`+quote.author} title='Twitter'>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
          </button>
          <button><WhatsappShareButton content={quote.author} url={quote.content+`${'\n'}`+quote.author} quote='Whatsapp'>
                  <WhatsappIcon size={32} round={true} /></WhatsappShareButton>
          </button>
        </div>
      </div>
    </>
  )
}


export default App;
