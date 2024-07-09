import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ message: "" })

  const fetchPlaces = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/places');
      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }
      const data = await response.json();
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const sortedPlaces = sortPlacesByDistance(data.places, latitude, longitude)
        setAvailablePlaces(sortedPlaces)
        setLoading(false)
      })

    } catch (err) {

      setError({ message: err.message || 'Could not fetch places, please try again later' })
    }


  }

  useEffect(() => {
    fetchPlaces()
  }, [])


  if (error.message) {
    return <Error title="An error occured!" message={error.message} />
  }
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
