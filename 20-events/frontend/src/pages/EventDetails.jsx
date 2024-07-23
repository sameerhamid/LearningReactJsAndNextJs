import React from 'react'
import { json, useLoaderData, useParams } from 'react-router-dom'
import EventItem from '../components/EventItem'

function EventDetailsPage() {
    const { event } = useLoaderData()

    return (

        <>
            <EventItem event={event} />
        </>
    )
}

export default EventDetailsPage

export const loader = async ({ request, params }) => {
    const response = await fetch('http://localhost:8080/events/' + params.eventId)
    if (!response.ok) {
        throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 })

    } else {
        return response
    }
}