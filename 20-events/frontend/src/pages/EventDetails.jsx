import React, { Suspense } from 'react'
import { Await, defer, json, redirect, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'

function EventDetailsPage() {
    const { event, events } = useRouteLoaderData('event-detail')

    return (

        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {
                        loadedEvent => {
                            return <EventItem event={loadedEvent} />
                        }
                    }

                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>

                    {
                        loadedEvents => <EventsList events={loadedEvents} />
                    }
                </Await>
            </Suspense>
        </>
    )
}

export default EventDetailsPage

const loadEvent = async (eventId) => {
    const response = await fetch('http://localhost:8080/events/' + eventId)
    if (!response.ok) {
        throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 })

    } else {
        const resData = await response.json()
        return resData.event
    }
}

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' }
        // throw { message: "Could not fetch events." }

        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 })
        throw json({ message: 'Could not fetch events.' }, { status: 500 })

    } else {
        // loader function supports the Browsers response object so we can return the respose object dirrectly from laoder 
        // return response
        const resData = await response.json();
        return resData.events;
    }
}

export const loader = async ({ request, params }) => {
    // const response = await fetch('http://localhost:8080/events/' + params.eventId)
    // if (!response.ok) {
    //     throw json({ message: 'Could not fetch details for selected event.' }, { status: 500 })

    // } else {
    //     return response
    // }

    return defer({
        // it will first wait for the first one then go to second
        events: await loadEvents(),
        event: loadEvent(params.eventId)
    })
}

export const action = async ({ request, params }) => {
    const response = await fetch('http://localhost:8080/events/' + params.eventId, {
        method: request.method
    })

    if (!response.ok) {
        throw json({ message: 'Could not delete the event.' }, { status: 500 })
    }

    return redirect('/events')
}