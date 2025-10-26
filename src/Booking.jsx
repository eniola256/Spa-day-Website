import NavBar from "./NavBar.jsx"
import "./Booking.css"
import Calender from "./Calender.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Booking() {


    const [selectedPack, setSelectedPack] = useState("")
    const [showPacks, setShowPacks] = useState(false); // ✅ Add this!


  const location = useLocation();

useEffect(() => {
  if (location.state?.pack) {
    setSelectedPack(location.state.pack);
    setShowPacks(false); // keeps dropdown closed
  }
}, [location]);

  return (
    <>
      <div className="Book-main">
        <NavBar />
        <div className="book-heading">
          <h1>Book A Session With Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem distinctio dolor, aperiam architecto alias  </p>
        </div>

        <div className="Booking-details">
          <div className="booking-all">
            <div className="field">
              <label>Name: </label><br />
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="field">
              <label>Email: </label><br />
              <input type="text" placeholder="myname@gmail.com" />
            </div>

            <div className="field"> 
              <label>Number of Guests: </label><br />
              <input type="number" placeholder="max:4" />
            </div>

            <div className="pack-picker"> 
              <div className="pack-text">
              <label>Package</label>
              <input
                type="text"
                value={selectedPack}
                readOnly
                onClick={() => setShowPacks(!showPacks)}
              />
              </div>
              <div className="pack-buttons" style={{ display: showPacks ? "flex" : "none" }}>
                {["Pack 1","Pack 2","Pack 3","Pack 4","Pack 5","Pack 6","Pack 7","Pack 8","Pack 9"]
                  .map((p,i)=>(
                    <button key={i} onClick={()=>{
                      setSelectedPack(p);
                      setShowPacks(false);
                    }}>
                      {p}
                    </button>
                ))}
              </div>
            </div>

        <div className="book-time">
          <p>Pick a Time</p>
          <div className="time-list">
            {[
              "9:00 AM", "10:30 AM", "12:00 PM",
              "2:00 PM", "4:30 PM", "6:00 PM",
              "8:00 PM", "10:00 PM"
            ].map((time, i) => (
              <div className="ind-time" key={i}>
                <input type="radio" name="time" id={`time-${i}`} />
                <label htmlFor={`time-${i}`}>{time}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="book-date">
          <Calender />
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking