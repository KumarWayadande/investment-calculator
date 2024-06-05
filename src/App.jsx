import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIdentifier]: newValue,
      };
    });
  };

  console.log(userInput);
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
    </>
  );
}

export default App;
