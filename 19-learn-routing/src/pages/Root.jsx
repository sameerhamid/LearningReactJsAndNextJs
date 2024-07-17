import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from './Root.module.css'

function RootLaoyout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>


        </>
    )
}

export default RootLaoyout
