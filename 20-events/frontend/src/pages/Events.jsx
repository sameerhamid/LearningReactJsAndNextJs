import React from 'react'
import { Link } from 'react-router-dom'

const EVENTS = [
    {
        id: 'e1',
        title: 'Event 1',
        date: '2022-01-01',
        description: 'Event 1 description'
    },
    {
        id: 'e2',
        title: 'Event 2',
        date: '2022-02-01',
        description: 'Event 2 description'
    },
    {
        id: 'e3',
        title: 'Event 3',
        date: '2022-03-01',
        description: 'Event 3 description'
    }, {
        id: 'e4',
        title: 'Event 4',
        date: '2022-04-01',
        description: 'Event 4 description'
    },
    {
        id: 'e5',
        title: 'Event 5',
        date: '2022-05-01',
        description: 'Event 5 description'
    },
    {
        id: 'e6',
        title: 'Event 6',
        date: '2022-06-01',
        description: 'Event 6 description'
    }
]

function EventsPage() {
    return (
        <>
            <h1>Events</h1>
            <ul>
                {
                    EVENTS.map(event => {
                        return <li key={event.id}>
                            <Link to={event.id}>{event.title}</Link>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default EventsPage
