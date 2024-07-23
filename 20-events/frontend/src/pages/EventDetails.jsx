import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailsPage() {
    const params = useParams()
    return (
        <div>
            <h2> EventDetailsPage</h2>
            {params.eventId}
        </div>
    )
}

export default EventDetailsPage
