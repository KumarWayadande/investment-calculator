import { useState } from "react";

export default function UserInput({onChange, userInput}) {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" onChange={(event) => onChange("initialInvestment", +(event.target.value))} required value={userInput.initialInvestment} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" onChange={(event) => onChange("annualInvestment", +(event.target.value))} required value={userInput.annualInvestment} />
        </p>
      </div>
      <div className="input-group" required>
        <p>
          <label>Expected Returns</label>
          <input type="number" onChange={(event) => onChange("expectedReturn", +(event.target.value))} required value={userInput.expectedReturn} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" onChange={(event) => onChange("duration", +(event.target.value))} required value={userInput.duration} />
        </p>
      </div>
    </section>
  );
}
