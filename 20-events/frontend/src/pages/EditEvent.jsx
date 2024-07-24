import React from 'react'
import EventForm from '../components/EventForm'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

function EditEventPage() {
    const { event } = useRouteLoaderData('event-detail')

    return (
        <EventForm event={event} method={'patch'} />
    )
}

export default EditEventPage
