import NavBar from "./NavBar.jsx"
import "./Package.css"
import { useRef, useEffect,  } from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Packages(){
const navigate = useNavigate();
 const [openCards, setOpenCards] = useState({});

// Toggle function
const toggleCard = (id) => {
  setOpenCards(prev => ({
    ...prev,
    [id]: !prev[id]
  }));
}

    return(<>
<div className="packages">
      <NavBar />
      <div className="packages-main">
        <h3>Our Packages</h3>
        <div className="all-pack">

  {/* ==================== Diamond ==================== */}
          <div className="bundle" id="Diamond">

            {/* Diamond Pack #1 */}
            <div className="pack pack1 diamond-bundle">
              <div className="top" onClick={() => toggleCard("card1")}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>

              <div className={`info ${openCards["card1"] ? "show" : ""}`}>
                <p>2hr signature massage therapy</p>
                <p>24K gold facial treatment</p>
                <p>Private Jacuzzi with rose petals & herbal infusions</p>
                <p>Luxury manicure, pedicure & scalp massage</p>
                <p>Champagne & chocolate-dipped strawberries</p>
                <p>Complimentary luxury gift bag</p>
                <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 1" } 
                      })}>
                  Book
                </button>
                  
                <div className="bottom">
                  <FontAwesomeIcon
                    onClick={() => toggleCard("card1")}
                    icon={faChevronUp}
                  />
                </div>
              </div>

              <div className="pack-info">
                <div className="main-pack">
                  <h3>Royal Escape Bundle</h3>
                  <p>Diamond</p>
                </div>
              </div>
            </div>

            {/* Diamond Pack #2 */}
            <div className="pack pack1 diamond-bundle">
              <div className="top" onClick={() => toggleCard("card2")}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>

              <div className={`info ${openCards["card2"] ? "show" : ""}`}>
                <p>2hr signature massage therapy</p>
                <p>24K gold facial treatment</p>
                <p>Private Jacuzzi with rose petals & herbal infusions</p>
                <p>Luxury manicure, pedicure & scalp massage</p>
                <p>Champagne & chocolate-dipped strawberries</p>
                <p>Complimentary luxury gift bag</p>
                <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 2" } 
                      })}>
                  Book
                </button>
                  

                <div className="bottom">
                  <FontAwesomeIcon
                    onClick={() => toggleCard("card2")}
                    icon={faChevronUp}
                  />
                </div>
              </div>

              <div className="pack-info">
                <div className="main-pack">
                  <h3>Royal Escape Bundle</h3>
                  <p>Diamond</p>
                </div>
              </div>
            </div>

            {/* Diamond Pack #3 */}
            <div className="pack pack1 diamond-bundle">
              <div className="top" onClick={() => toggleCard("card3")}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>

              <div className={`info ${openCards["card3"] ? "show" : ""}`}>
                <p>2hr signature massage therapy</p>
                <p>24K gold facial treatment</p>
                <p>Private Jacuzzi with rose petals & herbal infusions</p>
                <p>Luxury manicure, pedicure & scalp massage</p>
                <p>Champagne & chocolate-dipped strawberries</p>
                <p>Complimentary luxury gift bag</p>
                <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 3" } 
                      })}>
                  Book
                </button>

                <div className="bottom">
                  <FontAwesomeIcon
                    onClick={() => toggleCard("card3")}
                    icon={faChevronUp}
                  />
                </div>
              </div>

              <div className="pack-info">
                <div className="main-pack">
                  <h3>Royal Escape Bundle</h3>
                  <p>Diamond</p>
                </div>
              </div>
            </div>
          </div>

  {/* ===================== Gold ====================== */}
  <div className="bundle" id="Gold">

    {/* Gold Pack #1 */}
    <div className="pack pack2 gold-bundle">
      <div className="top" onClick={() => toggleCard("card4")}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className={`info ${openCards["card4"] ? "show" : ""}`}>
        <p>Body scrub with essential oils</p>
        <p>45-min aromatherapy massage</p>
        <p>Complimentary skincare mask</p>
        <p>Classic manicure or pedicure</p>
        <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 4" } 
                      })}>
                  Book
                </button>

        <div className="bottom">
          <FontAwesomeIcon
            onClick={() => toggleCard("card4")}
            icon={faChevronUp}
          />
        </div>
      </div>

      <div className="pack-info">
        <div className="main-pack">
          <h3>Glow Bundle</h3>
          <p>Gold</p>
        </div>
      </div>
    </div>

    {/* Gold Pack #2 */}
    <div className="pack pack2 gold-bundle">
      <div className="top" onClick={() => toggleCard("card5")}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className={`info ${openCards["card5"] ? "show" : ""}`}>
        <p>Body scrub with essential oils</p>
        <p>45-min aromatherapy massage</p>
        <p>Complimentary skincare mask</p>
        <p>Classic manicure or pedicure</p>
        <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 5" } 
                      })}>
                  Book
                </button>

        <div className="bottom">
          <FontAwesomeIcon
            onClick={() => toggleCard("card5")}
            icon={faChevronUp}
          />
        </div>
      </div>

      <div className="pack-info">
        <div className="main-pack">
          <h3>Glow Bundle</h3>
          <p>Gold</p>
        </div>
      </div>
    </div>

    {/* Gold Pack #3 */}
    <div className="pack pack3 gold-bundle">
      <div className="top" onClick={() => toggleCard("card6")}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className={`info ${openCards["card6"] ? "show" : ""}`}>
        <p>60-min Swedish massage</p>
        <p>Express facial</p>
        <p>Herbal tea service</p>
        <p>Sauna & steam room access</p>
        <p>Foot soak & exfoliation</p>
        <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 6" } 
                      })}>
                  Book
                </button>

        <div className="bottom">
          <FontAwesomeIcon
            onClick={() => toggleCard("card6")}
            icon={faChevronUp}
          />
        </div>
      </div>

      <div className="pack-info">
        <div className="main-pack">
          <h3>Relaxation Bundle</h3>
          <p>Gold</p>
        </div>
      </div>
    </div>
  </div>

  {/* ==================== Platinum ==================== */}
  <div className="bundle" id="Platinum">

    {/* Platinum Pack #1 */}
    <div className="pack pack4 platinum-bundle">
      <div className="top" onClick={() => toggleCard("card7")}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className={`info ${openCards["card7"] ? "show" : ""}`}>
        <p>90-min full-body massage</p>
        <p>Aromatherapy facial</p>
        <p>Luxury manicure & pedicure</p>
        <p>Champagne & fruit platter</p>
        <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 7" } 
                      })}>
                  Book
                </button>

        <div className="bottom">
          <FontAwesomeIcon
            onClick={() => toggleCard("card7")}
            icon={faChevronUp}
          />
        </div>
      </div>

      <div className="pack-info">
        <div className="main-pack">
          <h3>Serenity Bundle</h3>
          <p>Platinum</p>
        </div>
      </div>
    </div>

    {/* Platinum Pack #2 */}
    <div className="pack pack5 platinum-bundle">
      <div className="top" onClick={() => toggleCard("card8")}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className={`info ${openCards["card8"] ? "show" : ""}`}>
        <p>Couples massage (90 mins)</p>
        <p>Rose-petal bath ritual</p>
        <p>Gourmet 3-course dinner</p>
        <p>Complimentary bottle of wine</p>
        <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 8" } 
                      })}>
                  Book
                </button>

        <div className="bottom">
          <FontAwesomeIcon
            onClick={() => toggleCard("card8")}
            icon={faChevronUp}
          />
        </div>
      </div>

      <div className="pack-info">
        <div className="main-pack">
          <h3>Indulgence Bundle</h3>
          <p>Platinum</p>
        </div>
      </div>
    </div>

    {/* Platinum Pack #3 */}
    <div className="pack pack6 platinum-bundle">
      <div className="top" onClick={() => toggleCard("card9")}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className={`info ${openCards["card9"] ? "show" : ""}`}>
        <p>Detoxifying body scrub with sea salts</p>
        <p>Hydrating facial mask</p>
        <p>Steam room & sauna access</p>
        <p>Complimentary herbal wellness drink</p>
        <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 9" } 
                      })}>
                  Book
                </button>

        <div className="bottom">
          <FontAwesomeIcon
            onClick={() => toggleCard("card9")}
            icon={faChevronUp}
          />
        </div>
      </div>

      <div className="pack-info">
        <div className="main-pack">
          <h3>Renewal Bundle</h3>
          <p>Platinum</p>
        </div>
      </div>
    </div>
  </div>

</div>
        <div className="bundle-names">
          <a href="#Diamond" className="dia">Diamond</a>
          <a href="#Gold">Gold</a>
          <a href="#Platinum">Platinum</a>
          
        </div>
<div className="mobile-pack">

  {/* Diamond */}
  <div className="mobile-pack-bundle">
    <div className="bundle diamond" id="Diamond">
      
      {/* Card d1 */}
      <div className="pack pack1 diamond-bundle" id="d1">
        <div className="top" onClick={() => toggleCard("d1")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["d1"] ? "show" : ""}`}>
          <p>2hr signature massage therapy</p>
          <p>24K gold facial treatment</p>
          <p>Private Jacuzzi with rose petals & herbal infusions</p>
          <p>Luxury manicure, pedicure & scalp massage</p>
          <p>Champagne & chocolate-dipped strawberries</p>
          <p>Complimentary luxury gift bag</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 1" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("d1")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Royal Escape Bundle</h3>
            <p>Diamond</p>
          </div>
        </div>
      </div>

      {/* Card d2 */}
      <div className="pack pack1 diamond-bundle" id="d2">
        <div className="top" onClick={() => toggleCard("d2")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["d2"] ? "show" : ""}`}>
          <p>2hr signature massage therapy</p>
          <p>24K gold facial treatment</p>
          <p>Private Jacuzzi with rose petals & herbal infusions</p>
          <p>Luxury manicure, pedicure & scalp massage</p>
          <p>Champagne & chocolate-dipped strawberries</p>
          <p>Complimentary luxury gift bag</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 2" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("d2")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Royal Escape Bundle</h3>
            <p>Diamond</p>
          </div>
        </div>
      </div>

      {/* Card d3 */}
      <div className="pack pack1 diamond-bundle" id="d3">
        <div className="top" onClick={() => toggleCard("d3")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["d3"] ? "show" : ""}`}>
          <p>2hr signature massage therapy</p>
          <p>24K gold facial treatment</p>
          <p>Private Jacuzzi with rose petals & herbal infusions</p>
          <p>Luxury manicure, pedicure & scalp massage</p>
          <p>Champagne & chocolate-dipped strawberries</p>
          <p>Complimentary luxury gift bag</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 3" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("d3")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Royal Escape Bundle</h3>
            <p>Diamond</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="diamond-names names">
    <a href="#d1"></a>
    <a href="#d2"></a>
    <a href="#d3"></a>
  </div>

  {/* Gold */}
  <div className="mobile-pack-bundle">
    <div className="bundle" id="Gold">

      {/* g1 */}
      <div className="pack pack2 gold-bundle" id="g1">
        <div className="top" onClick={() => toggleCard("g1")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["g1"] ? "show" : ""}`}>
          <p>Body scrub with essential oils</p>
          <p>45-min aromatherapy massage</p>
          <p>Complimentary skincare mask</p>
          <p>Classic manicure or pedicure</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 4" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("g1")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Glow Bundle</h3>
            <p>Gold</p>
          </div>
        </div>
      </div>

      {/* g2 */}
      <div className="pack pack2 gold-bundle" id="g2">
        <div className="top" onClick={() => toggleCard("g2")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["g2"] ? "show" : ""}`}>
          <p>Body scrub with essential oils</p>
          <p>45-min aromatherapy massage</p>
          <p>Complimentary skincare mask</p>
          <p>Classic manicure or pedicure</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 5" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("g2")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Glow Bundle</h3>
            <p>Gold</p>
          </div>
        </div>
      </div>

      {/* g3 */}
      <div className="pack pack3 gold-bundle" id="g3">
        <div className="top" onClick={() => toggleCard("g3")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["g3"] ? "show" : ""}`}>
          <p>60-min Swedish massage</p>
          <p>Express facial</p>
          <p>Herbal tea service</p>
          <p>Sauna & steam room access</p>
          <p>Foot soak & exfoliation</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 6" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("g3")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Relaxation Bundle</h3>
            <p>Gold</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="gold-names names">
    <a href="#g1"></a>
    <a href="#g2"></a>
    <a href="#g3"></a>
  </div>

  {/* Platinum */}
  <div className="mobile-pack-bundle">
    <div className="bundle" id="Platinum">

      {/* p1 */}
      <div className="pack pack4 platinum-bundle" id="p1">
        <div className="top" onClick={() => toggleCard("p1")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["p1"] ? "show" : ""}`}>
          <p>90-min full-body massage</p>
          <p>Aromatherapy facial</p>
          <p>Luxury manicure & pedicure</p>
          <p>Champagne & fruit platter</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 7" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("p1")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Serenity Bundle</h3>
            <p>Platinum</p>
          </div>
        </div>
      </div>

      {/* p2 */}
      <div className="pack pack5 platinum-bundle" id="p2">
        <div className="top" onClick={() => toggleCard("p2")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["p2"] ? "show" : ""}`}>
          <p>Couples massage (90 mins)</p>
          <p>Rose-petal bath ritual</p>
          <p>Gourmet 3-course dinner</p>
          <p>Complimentary bottle of wine</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 8" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("p2")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Indulgence Bundle</h3>
            <p>Platinum</p>
          </div>
        </div>
      </div>

      {/* p3 */}
      <div className="pack pack6 platinum-bundle" id="p3">
        <div className="top" onClick={() => toggleCard("p3")}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <div className={`info ${openCards["p3"] ? "show" : ""}`}>
          <p>Detoxifying body scrub with sea salts</p>
          <p>Hydrating facial mask</p>
          <p>Steam room & sauna access</p>
          <p>Complimentary herbal wellness drink</p>
          <button onClick={() => navigate("/book", { 
                        state: { pack: "Pack 9" } 
                      })}>
                  Book
          </button>
          <div className="bottom">
            <FontAwesomeIcon onClick={() => toggleCard("p3")} icon={faChevronUp} />
          </div>
        </div>

        <div className="pack-info">
          <div className="main-pack">
            <h3>Renewal Bundle</h3>
            <p>Platinum</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="platinum-names names">
    <a href="#p1"></a>
    <a href="#p2"></a>
    <a href="#p3"></a>
  </div>

</div>

        </div>          
       </div>
</>
    )
}

export default Packages