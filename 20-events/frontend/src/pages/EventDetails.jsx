import React from 'react'
import { json, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'

function EventDetailsPage() {
    // const data = useLoaderData()

    // this works exact same as useLoaderData but it needs the route id
    const data = useRouteLoaderData('event-details')

    return (
        <>
            <EventItem event={data.event} />
        </>
    )
}

export default EventDetailsPage


export async function loader({ request, params }) {
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`)
    if (!response.ok) {
        throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 })
    } else {
        return response
    }

}