import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setAll(allClicks.concat("G"));
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAll(allClicks.concat("N"));
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAll(allClicks.concat("B"));
    setBad(bad + 1);
  };

  return (
    <div>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
    </div>
  );
};

export default App;
