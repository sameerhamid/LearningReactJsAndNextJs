import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

function EventRootLaout() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventRootLaout
