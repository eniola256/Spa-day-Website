import { useState, useEffect, useRef } from "react";
import "./PackagesSlider.css";

function PackagesSlider() {
  const bundles = [
    {
      type: "Diamond",
      title: "Royal Escape Bundle",
      details: [
        "2hr signature massage therapy",
        "24K gold facial treatment",
        "Private Jacuzzi with rose petals & herbal infusions",
        "Luxury manicure, pedicure & scalp massage",
        "Champagne & chocolate-dipped strawberries",
        "Complimentary luxury gift bag"
      ],
      price: "999$"
    },
    {
      type: "Gold",
      title: "Glow Bundle",
      details: [
        "Body scrub with essential oils",
        "45-min aromatherapy massage",
        "Complimentary skincare mask",
        "Classic manicure or pedicure"
      ],
      price: "999$"
    },
    {
      type: "Platinum",
      title: "Serenity Bundle",
      details: [
        "90-min full-body massage",
        "Aromatherapy facial",
        "Luxury manicure & pedicure",
        "Champagne & fruit platter"
      ],
      price: "999$"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bundles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bundles.length]);

  // Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // swipe left
      setCurrentIndex((prev) => (prev + 1) % bundles.length);
    } else if (diff < -50) {
      // swipe right
      setCurrentIndex((prev) =>
        prev === 0 ? bundles.length - 1 : prev - 1
      );
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {bundles.map((bundle, i) => (
          <div className="slide" key={i}>
            <div className={`pack ${bundle.type.toLowerCase()}-bundle`}>
              <div className="info">
                {bundle.details.map((d, j) => (
                  <p key={j}>{d}</p>
                ))}
                <h3 className="info-amount">{bundle.price}</h3>
              </div>
              <div className="pack-info">
                <h3>{bundle.title}</h3>
                <p>{bundle.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating indicator */}
      <div className="indicator">
        <span>{bundles[currentIndex].type}</span>
      </div>
    </div>
  );
}

export default PackagesSlider;
