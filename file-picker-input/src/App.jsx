import { useEffect, useRef } from 'react'

function App() {
  const inputRef = useRef()
  const handleClick = () => {
    inputRef.current.click()
    console.log(inputRef.current.value);
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*"
          ref={inputRef}
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  )
}

export default App
