import React, { useReducer } from "react";
import EventCard from "./EventCard";

const eventReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, action.payload]; // Add new event to the state
    case "DELETE_EVENT":
      return state.filter((event) => event.id !== action.payload); // For future event deletion functionality
    default:
      return state;
  }
};

const Form = () => {
  const [events, dispatch] = useReducer(eventReducer, []);

  // Form state to handle the input values
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new event object
    const newEvent = {
      id: Date.now(), // Simple unique ID generator
      title,
      location,
    };

    // Dispatch the ADD_EVENT action to the reducer
    dispatch({ type: "ADD_EVENT", payload: newEvent });

    // Reset form fields
    setTitle("");
    setLocation("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default Form;
