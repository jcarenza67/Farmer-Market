import React, { useState } from 'react'
import Select from './Select'
import Display from './Display'
import marketSchedule from './../../src/MarketSchedule';
import availableProduce from './../../src/ProduceAvailability';

function Main() {
    const [selectedDay, setSelectedDay] = useState("Sunday")
    const [selectedMonth, setSelectedMonth] = useState("January")
    return (

        <React.Fragment>
            <Select
            setSelectedDay={setSelectedDay} 
            setSelectedMonth={setSelectedMonth}
            selectedDay={selectedDay} 
            selectedMonth={selectedMonth}
            marketSchedule={marketSchedule}
            availableProduce={availableProduce}
            />
            
            <Display
            selectedDay={selectedDay}
            selectedMonth={selectedMonth} 
            marketSchedule={marketSchedule}
            availableProduce={availableProduce}
            />
        </React.Fragment>
    )
}

export default Main