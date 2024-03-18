import * as React from 'react';
import './App.css';
import Card from './components/Card';
import {CARDTEXT} from './utils/card-text';

const CardEventHandler = () =>{
  let cardMainList = Array.from(document.querySelectorAll("div.card"));
  cardMainList.forEach(cardMain =>{
    cardMain.classList.toggle("show-info");
  })
}
const cardList = CARDTEXT.map((cardtext) => {
    if(cardtext.buttonText) {
      return (
        <Card id={cardtext.id} header={cardtext.title} button={cardtext.buttonText} buttonEvent={CardEventHandler}>{cardtext.mainContent}</Card>
      )
    }else{
      return (
        <Card id={cardtext.id} header={cardtext.title} button={null} buttonEvent={null}>{cardtext.mainContent}</Card>
      )
    }
    
})

function App() {
  return (
    <div className="background-nautral-1">
      <div className="root">
        <h1>Her er en overskrift</h1>
        <div className="display-flex gap-base">
                {cardList}
            </div>
      </div>
    </div>
  );
}

export default App;
