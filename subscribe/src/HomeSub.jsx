import { useState } from "react";

const HomeSub = () => {
  const [gameName, setGameName] = useState("");

//თამაშის სახელის განახლების ფუნქცია
  function handleChangeText(e) {
    e.preventDefault();
    setGameName("Let's start the game:");
  }
  return (
    <>
      <h1 className="subscribe_title">Game Development Subscribe</h1>
      <form action="" onSubmit={handleChangeText} className="subscribe_form">
        <div>
          <h3 className="subscribe_about">how to {gameName} </h3>
          <button>more</button>
        </div>
      </form>
    </>
  );
};

export default HomeSub;
