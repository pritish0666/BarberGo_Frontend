import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import { auth } from "../config/firebase";
import { provider } from "../config/firebase";

export const SaloonNames = () => {
  const slotbookpage = () => {
    navigate("/bookslot");
  };

  function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div className="ujj">
        <select
          required
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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const pop = () => {
    openPopup();
  };
  const [salons, setSalons] = useState([]);
  const navigate = useNavigate();
  //   const [user] = useAuthState(auth);

  const navigate2slots = () => {
    navigate("/bookslot");
  };

  const navtohome = () => {
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/users")
      .then((response) => {
        setSalons(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="salonnm">
      <h1>
        <u>Choose Your Prefered Salon</u>
      </h1>
      {salons.map((salon) => (
        <div key={salon._id}>
          <button className="custom-button" onClick={() => pop()}>
            {salon.name}
          </button>
        </div>
      ))}
      <Modal className="popup-pckg" isOpen={isOpen} onRequestClose={closePopup}>
        <h1 id="choose">Choose what service you need !</h1>
        {/* <p>{`select the service you want ${selectedSlot}`}</p> */}
        <div>
          <Dropdown /> {/* Include the Dropdown component here */}
        </div>
        <div id="btnnnn">
          <button onClick={navigate2slots}>Proceed</button>

          <button onClick={closePopup}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};
