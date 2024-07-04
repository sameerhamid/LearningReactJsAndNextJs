import React, { useState, useEffect } from 'react'

function Progress({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("interval");
            setRemainingTime((prev) => prev - 10)
        }, 10)

        return () => {
            console.log("Cleaning up interval");
            clearInterval(interval)
        }
    }, [])

    return (
        <progress value={remainingTime} max={timer} />
    )
}

export default Progress
