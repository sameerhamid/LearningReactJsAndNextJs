import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal'

function TimerChallange({ title, targetTime }) {
    const timerRef = useRef()
    const dialogRef = useRef()

    const [timeRemaining, setTimeRemaining] = useState(targetTime)

    const timerAcitve = timeRemaining > 0 && timeRemaining < targetTime * 1000


    if (timeRemaining <= 0) {

        clearInterval(timerRef.current)
        dialogRef.current.open()
    }

    const handleStart = () => {
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 1)
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000)
    }

    const handleStop = () => {
        console.log('called');
        dialogRef.current.open()
        clearInterval(timerRef.current)
    }
    return (
        <>
            <ResultModal targetTime={targetTime}
                onReset={handleReset}
                remainingTime={timeRemaining} ref={dialogRef} />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ""}</p>

                <p>
                    <button onClick={timerAcitve ? handleStop : handleStart}>{timerAcitve ? "Stop" : "Start"} challenge</button>
                </p>
                <p className={timerAcitve ? 'active' : undefined}>
                    {timerAcitve ? 'Time is running ...' : "Timer inactive"}
                </p>
            </section>
        </>
    )
}

export default TimerChallange
