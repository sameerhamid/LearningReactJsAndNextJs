import React from 'react'
import { Link } from 'react-router-dom'
const DUMMY_EVETS = [
    { id: 'p1', title: 'Event 1' },
    { id: 'p2', title: 'Event 2' },
    { id: 'p3', title: 'Event 3' },
    { id: 'p4', title: 'Event 4' },
    { id: 'p5', title: 'Event 5' },
    //... more events...
]
function EventsPage() {
    return (
        <div>
            <h2>Events</h2>
            <ul>
                {
                    DUMMY_EVETS.map((event) => {
                        return <li key={event.id}>
                            <Link to={event.id}>{event.title}</Link>
                        </li>
                    })
                }


            </ul>
        </div>
    )
}

export default EventsPage
