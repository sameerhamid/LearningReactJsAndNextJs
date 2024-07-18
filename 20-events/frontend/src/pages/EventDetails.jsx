import React from 'react'
import { json, redirect, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom'
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


export async function action({ request, params }) {
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {
        method: request.method,

    })
    if (!response.ok) {
        throw json({ message: 'Could not delete event.' }, { status: 500 })
    }

    return redirect('/events')
}