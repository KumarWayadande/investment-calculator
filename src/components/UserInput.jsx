const UserInput = ({handleChange, userInput}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input onChange={(event) => {handleChange("initialInvestment", event);}} type="number" required value={userInput.initialInvestment}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input onChange={(event) => {handleChange("annualInvestment", event);}} type="number" required value={userInput.annualInvestment}/>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input onChange={(event) => {handleChange("expectedReturn", event);}} type="number" required value={userInput.expectedReturn}/>
        </p>
        <p>
          <label>Duration</label>
          <input onChange={(event) => {handleChange("duration", event);}} type="number" required value={userInput.duration}/>
        </p>
      </div>
    </section>
  );
};


export default UserInput;