import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { fetchUserPlaces, updateUserPlaces } from "./http.js";
import Error from "./components/Error.jsx";

function App() {
  const selectedPlace = useRef();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [userPlaces, setUserPlaces] = useState([]);

  useEffect(() => {
    setLoading(true)
    const fetchPlaces = async () => {
      try {
        const places = await fetchUserPlaces()
        setUserPlaces(places);
        setLoading(false)
      } catch (error) {
        console.log(error?.message);
        setError({ message: error.message || 'Failed to fetch user places.' })
        setLoading(false)
      }

    }

    fetchPlaces()
  }, [])

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [errorUpdatingState, setErrorUpdatingState] = useState();

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      const message = await updateUserPlaces([selectedPlace, ...userPlaces]);
      console.log(message);
    } catch (error) {
      console.log("error", error.message);
      setUserPlaces(userPlaces);
      setErrorUpdatingState({
        message: error.message || "Failed to update places.",
      });
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      const message = await updateUserPlaces(userPlaces.filter(place => place.id !== selectedPlace.current.id))
      console.log("message", message);
    } catch (error) {
      setUserPlaces(userPlaces)

      setErrorUpdatingState({ message: error.message || 'Failed to delete place.' })
    }


    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError() {
    setErrorUpdatingState(null);
  }

  return (
    <>
      <Modal open={errorUpdatingState} onClose={handleError}>
        {errorUpdatingState && <Error
          title="An error occured"
          message={errorUpdatingState.message}
          onConfirm={handleError}
        />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error?.message && <Error title="An error occured!" message={error.message} />}
        {!error?.message && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={loading}
          loadingText='Fetching your places...'
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
