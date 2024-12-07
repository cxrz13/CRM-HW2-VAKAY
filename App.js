import "./styles.css";
import SearchBar from "./SearchBar";
import VacationDisplay from "./VacationDisplay";
import { useState, useEffect } from "react";

export default function App() {
  [destination, setDestination] = useState("");
  [data, setData] = useState("");
  [image, setImage] = useState("");
  [map, setMap] = useState("");
  [weather, setWeather] = useState({});
  useEffect(() => {
    console.log(destination);
    fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": "AIzaSyDTiZAIlpsMPi60ndowBTtPPCKSKrKgboY",
        "X-Goog-FieldMask":
          "places.formattedAddress,places.displayName,places.photos",
      },
      body: JSON.stringify({
        textQuery: destination,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response.places[0]);
        const photo = response.places[0].photos[0].name;
        const name = response.places[0].formattedAddress;
        fetch(
          `https://places.googleapis.com/v1/${photo}/media?key=AIzaSyDTiZAIlpsMPi60ndowBTtPPCKSKrKgboY&maxHeightPx=300&maxWidthPx=400`
        )
          .then((image) => image.blob())
          .then((image) => URL.createObjectURL(image))
          .then((image) => setImage(image))
          .catch((error) => {
            console.log(error);
          });
        fetch(
          `https://maps.googleapis.com/maps/api/staticmap?center=${name}&zoom=15&size=300x300&key=AIzaSyDTiZAIlpsMPi60ndowBTtPPCKSKrKgboY`
        )
          .then((response) => {
            console.log(response);
            setMap(response);
          })
          .catch((error) => {
            console.log(error);
          });
        fetch(
          `https://api.weatherstack.com/current?access_key=7d180d2b0869777dd90e771cb19b5aca&query=${name}`
        )
          .then((response) => response.json())
          .then((response) => setWeather(response))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [destination]);

  return (
    <div className="App">
      <header>
        <h1>Welcome to VAKAY</h1>
        <h3> Where would you like to go?</h3>
        <h5> enter a city or landmark destination</h5>
      </header>
      <SearchBar action={setDestination} />
      <VacationDisplay
        vacationData={data}
        vacationImage={image}
        vacationMap={map}
        vacationWeather={weather}
      />
    </div>
  );
}
