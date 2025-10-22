import "./Calender.css"
import { useEffect,useRef } from "react";

function Calender() {
  const containerRef = useRef(null); // ✅ must come first inside the component

  useEffect(() => {
    if (!containerRef.current) return; // ✅ safe guard

    const datePicker = containerRef.current.querySelector('.date-picker');
    const dateInput = containerRef.current.querySelector('.date-input');
    const cancelBtn = containerRef.current.querySelector('.cancel');
    const yearInput = containerRef.current.querySelector('.year-input');
    const monthInput = containerRef.current.querySelector('.month-input');
    const applyBtn = containerRef.current.querySelector('.apply');
    const nextBtn = containerRef.current.querySelector('.next');
    const prevBtn = containerRef.current.querySelector('.prev');
    const datesEL = containerRef.current.querySelector(".dates");

    let selectedDate = new Date();
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth();

    const displayDates = () => {
      const updateYearMonth = () => {
        monthInput.selectedIndex = month;
        yearInput.value = year;
      };

      datesEL.innerHTML = "";
      updateYearMonth();

      const lastOfPrevMonth = new Date(year, month, 0);
      const daysToShow = lastOfPrevMonth.getDay();
      for (let i = daysToShow; i > 0; i--) {
        const text = lastOfPrevMonth.getDate() - i + 1;
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.disabled = true;
        datesEL.appendChild(btn);
      }

      const lastOfMonth = new Date(year, month + 1, 0);
      for (let i = 1; i <= lastOfMonth.getDate(); i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.addEventListener("click", () => {
          selectedDate = new Date(year, month, i);
        });
        datesEL.appendChild(btn);
      }
    };

    // Event listeners
    dateInput.addEventListener("click", () => (datePicker.hidden = false));
    cancelBtn.addEventListener("click", () => (datePicker.hidden = true));
    applyBtn.addEventListener("click", () => {
      dateInput.value = selectedDate.toLocaleDateString();
      datePicker.hidden = true;
    });

    nextBtn.addEventListener("click", () => {
      if (month === 11) year++;
      month = (month + 1) % 12;
      displayDates();
    });

    prevBtn.addEventListener("click", () => {
      if (month === 0) year--;
      month = (month - 1 + 12) % 12;
      displayDates();
    });

    monthInput.addEventListener("change", () => {
      month = monthInput.selectedIndex;
      displayDates();
    });

    yearInput.addEventListener("change", () => {
      year = yearInput.value;
      displayDates();
    });

    displayDates();

    // Cleanup
    return () => {
      if (!containerRef.current) return;
      containerRef.current.querySelectorAll("button").forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true));
      });
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="book-date">
        <div className="date-picker-container">
          <input type="text" className="date-input" placeholder="Select date" />
          <div className="date-picker" >
            <div className="date-picker-header">
              <button className="prev">Prev</button>
              <div>
                <select className="month-input">
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <input type="number" className="year-input" />
              </div>
              <button className="next">Next</button>
            </div>

            <div className="days">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            <div className="dates"></div>

            <div className="date-picker-footer">
              <button className="cancel">Cancel</button>
              <button className="apply">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender
 