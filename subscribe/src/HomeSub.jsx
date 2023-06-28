import { useState } from "react";
import gameData from "./gameData.json";

const HomeSub = () => {

  const [gameName, setGameName] = useState("Let's start the game:");

  function handleSubmitForm(e) {
    e.preventDefault();
  }
  //თამაშის სახელის განახლების ფუნქცია: რანდომად მოქვს gameData ჯსონ ფორმატიდან თამაშის სახელები
  function handleButtonClick() {
    const randomIndex = Math.floor(Math.random() * gameData.length);
    const randomGame = gameData[randomIndex];
    setGameName(randomGame.name);
  }

  return (
    <>
      <h1 className="subscribe_title">Game Development Subscribe</h1>
      <form onSubmit={handleSubmitForm} className="subscribe_form">
        <div>
          <h3 className="subscribe_about">
            how to <span className="game_name">{gameName}</span>
          </h3>
          <button onClick={handleButtonClick}>more</button>
        </div>
      </form>
    </>
  );
};

export default HomeSub;
