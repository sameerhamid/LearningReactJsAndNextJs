import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { json, useLoaderData, Await, defer } from 'react-router-dom';

function EventsPage() {
    const { events } = useLoaderData()

    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }
    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {
                    loadedEvents => <EventsList events={loadedEvents ?? []} />
                }
            </Await>
        </Suspense>
    );
}

export default EventsPage;

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

export const loader = () => {
    return defer({
        events: loadEvents()
    })
}