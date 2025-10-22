import NavBar from "./NavBar.jsx"
import { Link } from "react-router-dom";
import "./HomePage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpa, faLocationDot, faMobile, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from "react";



function HomePage() {
  
     useEffect(() => {
    const targets = document.querySelectorAll(".all-msg");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []); // <-- ✅ properly closed useEffect

  return (
    <>
      <div className="Body">
        {/* ====== MAIN HERO ====== */}
        <div className="main">
          <NavBar />
          <div className="home slide-top">
            <p className="home-p1">Welcome To</p>
            <h2 className="home-heading">The Wellhall</h2>
            <p className="home-p2">Resort & Spa Hotel</p>
          </div>
        </div>

        {/* ====== WELCOME MESSAGE ====== */}
        <div className="welcome-msg">
          <div className="all-msg">
            <div className="welcome-msg-txt slde-bottom">
              <h3>Welcome to your luxurious home away from home</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est at
                consequatur dolorum excepturi, reprehenderit, sit perspiciatis
                quibusdam aspernatur accusamus distinctio repellendus enim
                asperiores magni eum dolores doloribus non autem totam sequi
                nesciunt error voluptatum adipisci ipsa. Beatae in voluptatibus
                nulla ad provident nostrum incidunt consectetur!
              </p>
              <Link to="/about">
                <button className="message-btn">More about us</button>
              </Link>
            </div>
            <div className="welcome-msg-img">
              <img src="./welcome.jpg" alt="Welcome" />
            </div>
          </div>
        </div>

        {/* ====== WELCOME MESSAGE (MOBILE VERSION) ====== */}
        <div className="welcome-msg2">
          <div className="all-msg">
            <div className="welcome-msg-txt">
              <h3>Welcome to your luxurious home away from home</h3>
              <div className="welcome-msg-img">
                <img src="./welcome.jpg" alt="Welcome" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est at
                consequatur dolorum excepturi, reprehenderit, sit perspiciatis
                quibusdam aspernatur accusamus distinctio repellendus enim
                asperiores magni eum dolores doloribus non autem totam sequi
                nesciunt error voluptatum adipisci ipsa. Beatae in voluptatibus
                nulla ad provident nostrum incidunt consectetur!
              </p>
            </div>
          </div>
        </div>

        {/* ====== ACCOMMODATIONS ====== */}
        <div className="accomodations">
          <h3>Accomodations</h3>
          <div className="rooms">
            {/* Room 1 */}
            <div className="room r1">
              <img src="./room1.jpg" alt="room1" />
              <div className="room-txt">
                <div className="room-up-txt">
                  <p>2 adults | 1 child below 7</p>
                </div>
                <div className="room-down-txt">
                  <h4>De Luxe Room</h4>
                  <p>from $189 a night</p>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="room r2">
              <img src="./room2.jpg" alt="room2" />
              <div className="room-txt">
                <div className="room-up-txt">
                  <p>2 adults | 1 child below 7</p>
                </div>
                <div className="room-down-txt">
                  <h4>De Luxe Room</h4>
                  <p>from $189 a night</p>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="room r3">
              <img src="./room3.jpg" alt="room3" />
              <div className="room-txt">
                <div className="room-up-txt">
                  <p>2 adults | 1 child below 7</p>
                </div>
                <div className="room-down-txt">
                  <h4>De Luxe Room</h4>
                  <p>from $189 a night</p>
                </div>
              </div>
            </div>
          </div>

          <div className="extra">
            <div className="extra-left acc">
              <img src="./Sauna.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, molestias! Pariatur
              </p>
            </div>
            <div className="extra-right acc">
              <img src="./pool.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, molestias! Pariatur repudiandae quod hic facilis!
              </p>
            </div>
          </div>
        </div>

        {/* ====== CONTACT ====== */}
        <div className="contact">
          <h2>The Wellhall</h2>
          <div className="contact-infos">
            {/* Reservation Office */}
            <div className="contact-info">
              <h3>Reservation Office</h3>
              <p className="location">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                123 Anywhere st, <br /> Any City ST
              </p>
              <p>
                <FontAwesomeIcon icon={faMobile} className="icon" />
                +234 802 315 1240
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                eniolaa177@gmail.com
              </p>
            </div>

            {/* Office Hours */}
            <div className="contact-info">
              <h3>Office Hours</h3>
              <p>
                Monday to Friday <br /> 9:00 am to 6:00 pm
              </p>
              <p>
                Saturday <br /> 9:00 am to 12:00 noon
              </p>
            </div>

            {/* Social */}
            <div className="contact-info">
              <h3>Get Social</h3>
              <div className="contact-icons">
                <FontAwesomeIcon icon={faFacebook} className="contact-icon" />
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
                <FontAwesomeIcon icon={faXTwitter} className="contact-icon" />
              </div>
              <button className="contact-btn">Tag us in your photos</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage