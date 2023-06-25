import React, { useEffect, useState } from "react";
import axios from "axios";

export const Addslot = () => {
  const [slots, setSlots] = useState([]);
  const [newSlotTime, setNewSlotTime] = useState("");

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

  const handleSlotClick = (id) => {
    // Toggle slot availability
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

  const handleAddSlot = (e) => {
    e.preventDefault();

    // Create a new slot
    const newSlot = {
      time: newSlotTime,
      available: true,
    };

    // Send POST request to create a new slot
    axios
      .post("http://localhost:5001/api/slots", newSlot)
      .then((response) => {
        setSlots([...slots, response.data]);
        setNewSlotTime("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="sltad">
      <h3 className="ssss">Add Slots according your Salon Timings</h3>

      <form className="frm" onSubmit={handleAddSlot}>
        <input
          autoFocus
          id="slotInput"
          type="text"
          placeholder="Enter slot time"
          value={newSlotTime}
          required
          onChange={(e) => setNewSlotTime(e.target.value)}
        />
        <br />
        <button id="addButton" type="submit">
          Add Slot
        </button>
      </form>
      <div className="pppp">
        {slots.map((slot) => (
          <div key={slot._id}>
            <button className="added-slot">{slot.time}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
