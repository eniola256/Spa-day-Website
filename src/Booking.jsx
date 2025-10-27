import NavBar from "./NavBar.jsx"
import "./Booking.css"
import Calender from "./Calender.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

function Booking() {

    const [selectedPack, setSelectedPack] = useState("")
    const [showPacks, setShowPacks] = useState(false); // ✅ Add this!


  const location = useLocation();

useEffect(() => {
  if (location.state?.pack) {
    setSelectedPack(location.state.pack);
    setShowPacks(false); // keeps dropdown closed
  }
   if (state.succeeded) {
      return alert("Sent")
  }
}, [location]);

 const [state, handleSubmit] = useForm("meopozve");
  if (state.succeeded) {
      return alert("Sent")
  }

  return (
    <>
      <div className="Book-main">
        <NavBar />
        <div className="book-heading">
          <h1>Book A Session With Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem distinctio dolor, aperiam architecto alias  </p>
        </div>
        <form onSubmit={handleSubmit}>
  <div className="Booking-details">
    <div className="booking-all">

      <div className="field">
        <label>Name: </label><br />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
        />
      </div>

      <div className="field">
        <label>Email: </label><br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="myname@gmail.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="field">
        <label>Number of Guests: </label><br />
        <input
          type="number"
          name="guests"
          placeholder="max:4"
          min="1"
          max="4"
        />
      </div>

      <div className="pack-picker">
        <div className="pack-text">
          <label>Package</label>
          <input
            type="text"
            name="package"
            value={selectedPack}
            readOnly
            onClick={() => setShowPacks(!showPacks)}
          />
        </div>

        <div
          className="pack-buttons"
          style={{ display: showPacks ? "flex" : "none" }}
        >
          {[
            "Pack 1",
            "Pack 2",
            "Pack 3",
            "Pack 4",
            "Pack 5",
            "Pack 6",
            "Pack 7",
            "Pack 8",
            "Pack 9"
          ].map((p, i) => (
            <button
              type="button"
              key={i}
              onClick={() => {
                setSelectedPack(p);
                setShowPacks(false);
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="book-time">
        <p>Pick a Time</p>
        <div className="time-list">
          {[
            "9:00 AM",
            "10:30 AM",
            "12:00 PM",
            "2:00 PM",
            "4:30 PM",
            "6:00 PM",
            "8:00 PM",
            "10:00 PM"
          ].map((time, i) => (
            <div className="ind-time" key={i}>
              <input
                type="radio"
                name="time"
                value={time}
                id={`time-${i}`}
                required
              />
              <label htmlFor={`time-${i}`}>{time}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="book-date">
        <Calender name="date" />
      </div>

      <button type="submit" disabled={state.submitting} className="submit">
        Submit Booking
      </button>

    </div>
  </div>
</form>
      </div>
    </>
  );
}

export default Booking