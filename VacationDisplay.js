import Photo from "./Photo";
import Map from "./Map";
import Weather from "./Weather";

export default function VacationDisplay({
  vacationData,
  vacationImage,
  vacationMap,
  vacationWeather,
}) {
  return (
    <>
      <div className="Display">
        <Photo name={vacationData.formattedAddress} image={vacationImage} />
        <Map map={vacationMap} />
        <Weather weather={vacationWeather} />
      </div>
    </>
  );
}
