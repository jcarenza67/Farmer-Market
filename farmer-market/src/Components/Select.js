import React, { useState } from "react";


function Select() {
const [selectedDay, setSelectedDay] = useState("")
const [selectedMonth, setSelectedMonth] = useState("")

// day of week 
// day of week map for options

const handleDayChange = (event) => {
  setSelectedDay(event.target.value)
}

  return (
    <React.Fragment>
      <div>
        <label htmlFor="dayOfWeek">Day of Week</label>
          <select value={selectedDay} onChange={handleDayChange}>
            <option value="">Select a day</option>
            {dayOptions}
          </select>
      </div>
    </React.Fragment>
  );
}

export default Select;
