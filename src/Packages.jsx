import NavBar from "./NavBar.jsx"
import "./Package.css"
import { useRef, useEffect,  } from "react"

function Packages(){

  

    return(<>
<div className="packages">
      <NavBar />
      <div className="packages-main">
        <h3>Our Packages</h3>
        <div className="all-pack">
            {/* Diamond */}
            <div className="bundle" id="Diamond">
              <div className="pack pack1 diamond-bundle">
                {/* Overlay */}
                <div className="info">
                  <p>2hr signature massage therapy</p>
                  <p>24K gold facial treatment</p>
                  <p>Private Jacuzzi with rose petals & herbal infusions</p>
                  <p>Luxury manicure, pedicure & scalp massage</p>
                  <p>Champagne & chocolate-dipped strawberries</p>
                  <p>Complimentary luxury gift bag</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                {/* Footer */}
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Royal Escape Bundle</h3>
                    <p>Diamond</p>
                  </div>
                </div>
              </div>
              <div className="pack pack1 diamond-bundle">
                {/* Overlay */}
                <div className="info">
                  <p>2hr signature massage therapy</p>
                  <p>24K gold facial treatment</p>
                  <p>Private Jacuzzi with rose petals & herbal infusions</p>
                  <p>Luxury manicure, pedicure & scalp massage</p>
                  <p>Champagne & chocolate-dipped strawberries</p>
                  <p>Complimentary luxury gift bag</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                {/* Footer */}
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Royal Escape Bundle</h3>
                    <p>Diamond</p>
                  </div>
                </div>
              </div>
              <div className="pack pack1 diamond-bundle">
                {/* Overlay */}
                <div className="info">
                  <p>2hr signature massage therapy</p>
                  <p>24K gold facial treatment</p>
                  <p>Private Jacuzzi with rose petals & herbal infusions</p>
                  <p>Luxury manicure, pedicure & scalp massage</p>
                  <p>Champagne & chocolate-dipped strawberries</p>
                  <p>Complimentary luxury gift bag</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                {/* Footer */}
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Royal Escape Bundle</h3>
                    <p>Diamond</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gold */}
            <div className="bundle" id="Gold" >
              <div className="pack pack2 gold-bundle">
                <div className="info">
                  <p>Body scrub with essential oils</p>
                  <p>45-min aromatherapy massage</p>
                  <p>Complimentary skincare mask</p>
                  <p>Classic manicure or pedicure</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Glow Bundle</h3>
                    <p>Gold</p>
                  </div>
                </div>
              </div>
              <div className="pack pack2 gold-bundle">
                <div className="info">
                  <p>Body scrub with essential oils</p>
                  <p>45-min aromatherapy massage</p>
                  <p>Complimentary skincare mask</p>
                  <p>Classic manicure or pedicure</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Glow Bundle</h3>
                    <p>Gold</p>
                  </div>
                </div>
              </div>
              <div className="pack pack3 gold-bundle">
                <div className="info">
                  <p>60-min Swedish massage</p>
                  <p>Express facial</p>
                  <p>Herbal tea service</p>
                  <p>Sauna & steam room access</p>
                  <p>Foot soak & exfoliation</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Relaxation Bundle</h3>
                    <p>Gold</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platinum */}
            <div className="bundle" id="Platinum">
              <div className="pack pack4" id="platinum-bundle">
                <div className="info">
                  <p>90-min full-body massage</p>
                  <p>Aromatherapy facial</p>
                  <p>Luxury manicure & pedicure</p>
                  <p>Champagne & fruit platter</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Serenity Bundle</h3>
                    <p>Platinum</p>
                  </div>
                </div>
              </div>

              <div className="pack pack5 platinum-bundle">
                <div className="info">
                  <p>Couples massage (90 mins)</p>
                  <p>Rose-petal bath ritual</p>
                  <p>Gourmet 3-course dinner</p>
                  <p>Complimentary bottle of wine</p>
                  <h3 className="info-amount">999$</h3>
                </div>
                <div className="pack-info">
                  <div className="main-pack">
                    <h3>Indulgence Bundle</h3>
                    <p>Platinum</p>
                  </div>
                </div>
              </div>

              <div className="pack pack6 platinum-bundle">
                <div className="info">
                  <p>Detoxifying body scrub with sea salts</p>
                  <p>Hydrating facial mask</p>
                  <p>Steam room & sauna access</p>
                  <p>Complimentary herbal wellness drink</p>
                  <h3 className="info-amount">999$</h3>
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
      <div className="pack pack1 diamond-bundle  " id="d1" >
        <div className="info">
          <p>2hr signature massage therapy</p>
          <p>24K gold facial treatment</p>
          <p>Private Jacuzzi with rose petals & herbal infusions</p>
          <p>Luxury manicure, pedicure & scalp massage</p>
          <p>Champagne & chocolate-dipped strawberries</p>
          <p>Complimentary luxury gift bag</p>
          <h3 className="info-amount">999$</h3>
        </div>
        <div className="pack-info">
          <div className="main-pack">
            <h3>Royal Escape Bundle</h3>
            <p>Diamond</p>
          </div>
        </div>
      </div>

      <div className="pack pack1 diamond-bundle" id="d2">
        <div className="info">
          <p>2hr signature massage therapy</p>
          <p>24K gold facial treatment</p>
          <p>Private Jacuzzi with rose petals & herbal infusions</p>
          <p>Luxury manicure, pedicure & scalp massage</p>
          <p>Champagne & chocolate-dipped strawberries</p>
          <p>Complimentary luxury gift bag</p>
          <h3 className="info-amount">999$</h3>
        </div>
        <div className="pack-info">
          <div className="main-pack">
            <h3>Royal Escape Bundle</h3>
            <p>Diamond</p>
          </div>
        </div>
      </div>

      <div className="pack pack1 diamond-bundle" id="d3">
        <div className="info">
          <p>2hr signature massage therapy</p>
          <p>24K gold facial treatment</p>
          <p>Private Jacuzzi with rose petals & herbal infusions</p>
          <p>Luxury manicure, pedicure & scalp massage</p>
          <p>Champagne & chocolate-dipped strawberries</p>
          <p>Complimentary luxury gift bag</p>
          <h3 className="info-amount">999$</h3>
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
      <a href="#d1"> </a>
      <a href="#d2"></a>
      <a href="#d3"></a>
    </div>

  {/* Gold */}
  <div className="mobile-pack-bundle">
    <div className="bundle" id="Gold">
      <div className="pack pack2 gold-bundle" id="g1">
        <div className="info">
          <p>Body scrub with essential oils</p>
          <p>45-min aromatherapy massage</p>
          <p>Complimentary skincare mask</p>
          <p>Classic manicure or pedicure</p>
          <h3 className="info-amount">999$</h3>
        </div>
        <div className="pack-info">
          <div className="main-pack">
            <h3>Glow Bundle</h3>
            <p>Gold</p>
          </div>
        </div>
      </div>

      <div className="pack pack2 gold-bundle" id="g2">
        <div className="info">
          <p>Body scrub with essential oils</p>
          <p>45-min aromatherapy massage</p>
          <p>Complimentary skincare mask</p>
          <p>Classic manicure or pedicure</p>
          <h3 className="info-amount">999$</h3>
        </div>
        <div className="pack-info">
          <div className="main-pack">
            <h3>Glow Bundle</h3>
            <p>Gold</p>
          </div>
        </div>
      </div>

      <div className="pack pack3 gold-bundle" id="g3"> 
        <div className="info">
          <p>60-min Swedish massage</p>
          <p>Express facial</p>
          <p>Herbal tea service</p>
          <p>Sauna & steam room access</p>
          <p>Foot soak & exfoliation</p>
          <h3 className="info-amount">999$</h3>
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
      <a href="#g1"> </a>
      <a href="#g2"></a>
      <a href="#g3"></a>
    </div>

  {/* Platinum */}
  <div className="mobile-pack-bundle">
    <div className="bundle" id="Platinum">
      <div className="pack pack4 platinum-bundle" id="p1">
        <div className="info">
          <p>90-min full-body massage</p>
          <p>Aromatherapy facial</p>
          <p>Luxury manicure & pedicure</p>
          <p>Champagne & fruit platter</p>
          <h3 className="info-amount">999$</h3>
        </div>
        <div className="pack-info">
          <div className="main-pack">
            <h3>Serenity Bundle</h3>
            <p>Platinum</p>
          </div>
        </div>
      </div>

      <div className="pack pack5 platinum-bundle" id="p2">
        <div className="info">
          <p>Couples massage (90 mins)</p> 
          <p>Rose-petal bath ritual</p>
          <p>Gourmet 3-course dinner</p>
          <p>Complimentary bottle of wine</p>
          <h3 className="info-amount">999$</h3>
        </div>
        <div className="pack-info">
          <div className="main-pack">
            <h3>Indulgence Bundle</h3>
            <p>Platinum</p>
          </div>
        </div>
      </div>

      <div className="pack pack6 platinum-bundle" id="p3">
        <div className="info">
          <p>Detoxifying body scrub with sea salts</p>
          <p>Hydrating facial mask</p>
          <p>Steam room & sauna access</p>
          <p>Complimentary herbal wellness drink</p>
          <h3 className="info-amount">999$</h3>
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
      <a href="#p1"> </a>
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