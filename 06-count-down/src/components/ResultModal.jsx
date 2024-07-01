import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialogRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            open: () => dialogRef.current.showModal(),
        }
    })
    return (
        <dialog className='result-modal' ref={dialogRef}>
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal
