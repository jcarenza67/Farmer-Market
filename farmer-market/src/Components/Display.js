import React from "react";
import { Card, List, Segment, Header } from 'semantic-ui-react';



function Display({ selectedDay, selectedMonth, marketSchedule, availableProduce}) {
    const selectedMonthData = availableProduce.find(produce => produce.month === selectedMonth)
    const selectedDayData = marketSchedule.find(schedule => schedule.day === selectedDay)

    return (
    <React.Fragment>
        <Segment>
            <Header as='h3'>Selected Day: {selectedDay}</Header>
            
            {selectedDayData && (
            <Card>
                <Card.Content>
                    <Card.Header>Day Details</Card.Header>
                        <Card.Description>
                            <p>{selectedDayData.location}</p>
                            <p>{selectedDayData.hours}</p>
                            <p>{selectedDayData.booth}</p>
                        </Card.Description>
                </Card.Content>
            </Card>
                )}

            <Header as='h3'>Selected Month: {selectedMonth}</Header>
                {selectedMonthData && (
            <Card>
                <Card.Content>
                    <Card.Header>Month Details</Card.Header>
                        <Card.Description>
                            <List bulleted>
                                {selectedMonthData.selection.map((produce, index) => (
                                <List.Item key={index}>{produce}</List.Item>
                                ))
                                }
                            </List>
                        </Card.Description>
                </Card.Content>
            </Card>
                )}
        </Segment>
    </React.Fragment>
    );
}

export default Display;
