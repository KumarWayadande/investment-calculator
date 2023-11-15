import Header from "./components/Header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration >= 1;

  const handleChange1 = (valueIdentifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [valueIdentifier]: +newValue.target.value,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput handleChange={handleChange1} userInput={userInput} />
      {!isValid ? (
        <p className="center">Please enter duration greater than 1</p>
      ) : (
        <Results userInput={userInput} />
      )}
    </>
  );
}

export default App;
