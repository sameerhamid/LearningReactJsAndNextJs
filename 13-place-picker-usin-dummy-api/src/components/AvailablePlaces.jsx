import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])


  const fetchPlaces = async () => {
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();
    setAvailablePlaces(data.places)
  }

  useEffect(() => {
    fetchPlaces()
  }, [])
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
