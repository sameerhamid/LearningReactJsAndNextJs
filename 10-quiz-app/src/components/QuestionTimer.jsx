import React, { useState, useEffect } from "react";

function QuestionTimer({ timeout, onTimeout, mode }) {
    const [reamainingTime, setRemainingTime] = useState(timeout);
    // setTimeout(onTimeout, timeout)
    useEffect(() => {
        console.log("SETTING TIMEOUT");
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            console.log("Clearing timeout");
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("SETTING INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);

        return () => {
            console.log("Clearing interval");
            clearInterval(interval);
        };
    }, []);

    return (
        <progress
            value={reamainingTime}
            max={timeout}
            className={mode}
            id="question-time"
        />
    );
}

export default QuestionTimer;
