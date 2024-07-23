import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

function ErrorPage() {
    const error = useRouteError()

    console.log(error);

    let title = 'An error occured!'
    let message = 'Somethig went wrong'

    if (error.status === 500) {
        // when we throw the Response object then we have to parse the data
        // message = JSON.parse(error.data).message

        message = error.data.message


    }

    // for the route which will not found
    if (error.status === 404) {
        title = 'Not found!'
        message = 'The page you are looking for does not exist'
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default ErrorPage
