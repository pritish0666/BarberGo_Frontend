import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const Packages = () => {
  const navigate = useNavigate();

  function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="dselectropdown-"
          style={{ width: "200px", padding: "10px", borderRadius: "4px" }}
        >
          <option disabled value="">
            select an option
          </option>
          <option value={"option1"}>Haircut</option>
          <option value={"option2"}>Beard</option>
          <option value={"option3"}>Facial</option>
          <option value={"option4"}>Massage</option>
          <option value={"option5"}>Hair Dye</option>
          <option value={"option6"}>Hair Treatment</option>
          <option value={"option7"}>Hair Extensions</option>
        </select>
      </div>
    );
  }

  return (
    <div>
      <Dropdown /> {/* Include the Dropdown component here */}
    </div>
  );
};
