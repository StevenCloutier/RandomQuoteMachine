import React, {useState} from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

function App() {
  const  [ quote, setQuote]=useState("fall seven time get up eight times")
const[author,setAuthor]= useState("Japanese Proverb")
  return (   
    <wrapper id="quote-box">
    <div className="App">
      <header className="App-header">
        <p id ="text">"{quote}"</p>
        <p id ="author">-{author} </p>
        <button onClick ={()=>{setQuote("Education costs money. But then so does ignorance.");
        setAuthor("Sir Claus Moser")
        }} id ="new-quote">click me </button>
      <a href={'http://www.twitter.com/intent/tweet?text'} id ="tweet-quote"><FontAwesomeIcon icon={faTwitter}/></a>
        </header>
    </div>
    </wrapper>
   
  );
}

export default App;
