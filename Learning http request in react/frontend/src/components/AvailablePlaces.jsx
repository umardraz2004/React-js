import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetchAvailablePlaces();
        if (response.ok) {
          const resData = await response.json();
          setTimeout(() => {
            navigator.geolocation.getCurrentPosition((position) => {
              const sortedPlaces = sortPlacesByDistance(
                resData.places,
                position.coords.latitude,
                position.coords.longitude
              );
              setAvailablePlaces(sortedPlaces);
              setIsFetching(false);
            });
          }, 3000);
        } else {
          throw new Error("Failed to fetch places");
        }
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, Please try again later",
        });
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching Places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
