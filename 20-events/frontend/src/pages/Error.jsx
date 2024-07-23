import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()

    let title = 'An error occured!'
    let message = 'Somethig went wrong'

    if (error.status === 500) {
        message = JSON.parse(error.data).message

    }

    // for the route which will not found
    if (error.status === 404) {
        title = 'Not found!'
        message = 'The page you are looking for does not exist'
    }
    return (
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    )
}

export default ErrorPage
