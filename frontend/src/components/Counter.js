import React, { useState } from "react";

function Counter() {
    const bills = [1, 5, 10, 20, 50, 100];
    const [quantities, setQuantities] = useState(Array(bills.length).fill(""));

    // Handle input changes
    const handleChange = (index, value) => {
      const newQuantities = [...quantities];
      newQuantities[index] = value === "" ? "" : parseInt(value, 10) || 0; // Allow empty input
      setQuantities(newQuantities);
    };

    // Calculate total amount
    const total = bills.reduce(
      (sum, bill, index) => sum + bill * (quantities[index] || 0),
      0
    );

    return (
      <div className="container d-flex flex-column justify-content-center align-items-center gap-1 w-100 counter-container">
        {bills.map((bill, index) => (
          <div
            key={index}
            className="card bg-success text-white p-1 d-flex flex-column justify-content-center align-items-start gap-1"
          >
            <h3 className="h3">${bill}</h3>
            <input
              className="form-control p-2"
              type="number"
              min="0"
              value={quantities[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}

        {/* Display the Total */}
        <h6 className="h6 m-3 font-weight-bold d-flex justify-content-center align-items-center">
          TOTAL: ${total}
        </h6>
      </div>
    );
}

export default Counter;
