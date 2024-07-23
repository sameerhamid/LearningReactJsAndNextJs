import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData()

    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }
    return (
        <>
            <EventsList events={data.events || []} />
        </>
    );
}

export default EventsPage;

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' }
        // throw { message: "Could not fetch events." }

        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 })
        throw json({ message: 'Could not fetch events.' }, { status: 500 })

    } else {
        // loader function supports the Browsers response object so we can return the respose object dirrectly from laoder 
        return response
        // const resData = await response.json();
        // return resData.events;
    }
}