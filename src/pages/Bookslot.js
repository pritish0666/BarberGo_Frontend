import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

export const Bookslot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const nav2payment = () => {
    navigate("/payment");
  };
  const error = () => {
    alert("OOPS, slot already booked!");
  };

  const pop = () => {
    openPopup();
  };

  const [slots, setSlots] = useState([]);
  useEffect(() => {
    // Fetch slots from the backend
    axios
      .get("http://localhost:5001/api/slots")
      .then((response) => {
        setSlots(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSlotClick = (id, time) => {
    // Toggle slot availability
    pop();

    setSelectedSlot(time);

    const updatedSlots = slots.map((slot) => {
      if (slot._id === id) {
        return { ...slot, available: !slot.available };
      }
      return slot;
    });
    axios
      .put(`http://localhost:5001/api/slots/${id}`, {
        available: !slots.find((slot) => slot._id === id).available,
      })
      .then((response) => {
        setSlots(updatedSlots);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div id="ved">
      <h3 className="shirish">Book Your Slot</h3>
      {slots.map((slot) => (
        <div key={slot._id}>
          <button
            className="ujjwal"
            onClick={
              !slot.available
                ? () => error()
                : () => handleSlotClick(slot._id, slot.time)
            }
          >
            {slot.available ? slot.time : `N.A. for ${slot.time}`}
          </button>
        </div>
      ))}

      <Modal className="popup" isOpen={isOpen} onRequestClose={closePopup}>
        <h1 id="abhijit">Confirm Slot</h1>
        <p id="haggu">{`Press Confirm to book your slot for ${selectedSlot}`}</p>

        <div className="sneha">
          <button id="prit" onClick={nav2payment}>
            Confirm
          </button>
          <button id="prit" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};
