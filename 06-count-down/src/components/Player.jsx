import { useState, useRef } from 'react'
export default function Player() {
  const inputRef = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState(null)

  const handleClick = () => {
    setEnteredPlayerName(inputRef.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
