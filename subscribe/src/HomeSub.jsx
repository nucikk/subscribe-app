import { useState } from "react";
import gameData from "./gameData.json";

const HomeSub = () => {
  // useState variables
  const [gameName, setGameName] = useState("Let's start the game:");
  const [userEmail, setUserEmail] = useState("");
  const [displayEmailMsg, setDisplayEmailMsg] = useState(false);
  const [privacyText, setPrivacyText] = useState(true);

  function handleSubmitForm(e) {
    e.preventDefault();
    setDisplayEmailMsg(true);
  }
  //თამაშის სახელის განახლების ფუნქცია: რანდომად მოქვს gameData ჯსონ ფორმატიდან თამაშის სახელები
  function handleButtonClick() {
    const randomIndex = Math.floor(Math.random() * gameData.length);
    const randomGame = gameData[randomIndex];
    setGameName(randomGame.name);
  }

  // ფუნქცია emailის ინპუტის ცვლილების დასამუშავებლად
  function handleChangeEmail(e) {
    e.preventDefault();
    setUserEmail(e.target.value);
  }

  return (
    <>
      <h1 className="subscribe_title">Game Development Subscribe</h1>
      <form onSubmit={handleSubmitForm} className="subscribe_form">
        <div className="subscribe_card">
          <div className="game_box">
            <h3 className="subscribe_about">
              how to <span className="game_name">{gameName}</span>
            </h3>
            <button onClick={handleButtonClick}>more</button>
          </div>
          <p className="subscribe_tips">
            Learn smart gadget and internet tips and tricks with our
            entertaining and ingenious how-tos.Technology is the application of
            knowledge for achieving practical goals in a reproducible way. The
            word technology can also mean the products resulting from such
            efforts
          </p>
          <div className="game_box">
            <input
              className="subscribe_input"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={userEmail}
              onChange={handleChangeEmail}
            />
            <button onClick={handleSubmitForm}>Sign me up</button>
          </div>
          {/* displayEmailMsg სტეიტის მნიშვნელობა თუ იქნება true გამოჩნდება შეტყობინება და ასევე მომხმარებლის მიერ გაგზავნილი ელ.ფოსტა */}
          {displayEmailMsg && (
            <p>
              Your email has been successfully sent:{" "}
              <span className="user_email">{userEmail}</span>
            </p>
          )}
          <div className="privacy_box">
          {/* privacyText მდგომარეობა განსაზღვრავს, ნაჩვენები იქნება თუ არა სრული შეტყობინება checkbox დაჭერისას შეიცვლება ტექსტი*/}
            {privacyText ? (
              <p>
                By signing up, you agree to our Terms of Use and acknowledge the
                data practices in our Privacy Policy. You may unsubscribe at any
                time. <input type="checkbox" name="privacy"  onClick={() => setPrivacyText(false)}/>
              </p>
            ) : (
              <p>Privacy Policy Check</p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default HomeSub;
