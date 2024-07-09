import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [loading, setLoading] = useState(true)


  const fetchPlaces = async () => {
    setLoading(true)
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();
    setAvailablePlaces(data.places)
    setLoading(false)
  }

  useEffect(() => {
    fetchPlaces()
  }, [])
  return (
    <Places
      title="Available Places"
      isLoading={loading}
      loadingText="Fetching places data..."
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
