export default function Weather({ weather }) {
    return (
      <>
        <section className="Weather">
          <h2> {weather.weather_descriptions}</h2>
          <h2>{weather.temperature } </h2>
        </section>
      </>
    );
  }
  