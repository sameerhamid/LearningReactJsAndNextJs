import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

function Error() {
    const error = useRouteError()

    console.log("error", error.data);

    let title = "An error occured!"
    let message = "Something went wrong"
    if (error.status === 500) {
        // message = JSON.parse(error.data).message
        message = error.data.message
    }

    if (error.status === 404) {
        title = "Not found!"
        message = "Could not find resourse or page."
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>
                    {message}
                </p>
            </PageContent>
        </>
    )
}

export default Error
