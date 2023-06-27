import React from "react";


function Select({ setSelectedDay, setSelectedMonth, selectedDay, selectedMonth, marketSchedule, availableProduce}) {
    const dayOptions = marketSchedule.map((market) => (
        <option key={market.day} value={market.day}>
        {market.day}
        </option>
    ));

    const monthOptions = availableProduce.map((selection) => (
        <option key={selection.month} value={selection.month}>
        {selection.month}
    </option>
    ));

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value)
    }

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value)
    }

    return (
        <React.Fragment>
            <div className="dropdown">
                <label htmlFor="days">Day of Week</label>
                <select value={selectedDay} onChange={handleDayChange}>
                <option disabled value="">Select a day</option>
                {dayOptions}
                </select>
                <label htmlFor="month">Month of year</label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                <option disabled value="">Select a Month</option>
                {monthOptions}
                </select>
            </div>
        </React.Fragment>
    );
    }

export default Select;
