import NavBar from "./NavBar.jsx"
import "./Booking.css"
import Calender from "./Calender.jsx";
function Booking() {
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

            <div className="field"> 
              <label>Package</label><br />
              <select name="Package">
                <option>Pack1</option>
                <option>Pack2</option>
                <option>Pack3</option>
              </select>
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