import React from 'react'

function TimerChallange({ title, targetTime }) {

    const [timerExpired, setTimerExpired] = React.useState(false)
    const [timerStarted, setTimerStarted] = React.useState(false)
    const handleStart = () => {
        setTimerStarted(true)
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
    }

    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ""}</p>

            <p>
                <button onClick={handleStart}>{timerStarted ? "Stop" : "Start"} challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running ...' : "Timer inactive"}
            </p>
        </section>
    )
}

export default TimerChallange
