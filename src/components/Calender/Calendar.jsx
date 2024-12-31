import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Load events from localStorage when the component mounts
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowModal(false); // Close the modal when a new date is selected
  };

  const handleAddEvent = () => {
    if (newEvent.trim() !== '') {
      const eventDate = date.toDateString(); // Ensure the date format is consistent
      const updatedEvents = [...events, { date: eventDate, event: newEvent }];
      
      // Update state and localStorage
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));

      // Reset the modal and input field
      setNewEvent('');
      setShowModal(false);
    } else {
      alert("Event details cannot be empty");
    }
  };

  const handleDateClick = (date) => {
    setDate(date);
    setShowModal(true); // Open the modal when a date is clicked
  };

  const getEventsForDate = (date) => {
    const dateStr = date.toDateString(); // Convert date to string format for consistency
    return events.filter((event) => event.date === dateStr);
  };

  // Function to highlight days with events
  const tileClassName = ({ date, view }) => {
    const eventsForDay = getEventsForDate(date);
    if (eventsForDay.length > 0) {
      return 'has-events'; // Apply custom class if events exist for the date
    }
  };

  return (
    <div className="calendar-container">
      <h2>Your Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={tileClassName}
        onClickDay={handleDateClick} // Handle click on a date
      />

      {showModal && (
        <div className="modal">
          <h3>Add Event</h3>
          <input
            type="text"
            placeholder="Enter event details"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
          />
          <button onClick={handleAddEvent}>Add Event</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}

      {/* Display events for the selected date */}
      <div className="event-list">
        <h3>Events for {date.toDateString()}:</h3>
        <ul>
          {getEventsForDate(date).map((event, index) => (
            <li key={index}>{event.event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComponent;
