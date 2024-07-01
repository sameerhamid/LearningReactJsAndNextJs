import React, { useRef } from 'react'
import ResultModal from './ResultModal'

function TimerChallange({ title, targetTime }) {
    const timerRef = useRef()
    const dialogRef = useRef()

    const [timerExpired, setTimerExpired] = React.useState(false)
    const [timerStarted, setTimerStarted] = React.useState(false)

    const handleStart = () => {
        setTimerStarted(true)
        timerRef.current = setTimeout(() => {
            setTimerExpired(true)
            dialogRef.current.showModal()
        }, targetTime * 1000)
    }

    const handleStop = () => {
        clearTimeout(timerRef.current)
    }
    return (
        <>
            <ResultModal targetTime={targetTime} result="lost" ref={dialogRef} />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ""}</p>

                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} challenge</button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running ...' : "Timer inactive"}
                </p>
            </section>
        </>
    )
}

export default TimerChallange
