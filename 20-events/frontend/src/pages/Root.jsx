import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet, useNavigation } from 'react-router-dom'

function Root() {
    // const navigation = useNavigation()

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && 'Loading...'} */}
                <Outlet />
            </main>
        </>
    )
}

export default Root
