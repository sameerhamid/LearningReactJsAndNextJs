import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ message: "" })

  const fetchPlaces = async () => {
    setLoading(true)
    try {
      const places = await fetchAvailablePlaces()

      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const sortedPlaces = sortPlacesByDistance(places, latitude, longitude)
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
