export default function Photo({ name, image }) {
    return (
      <>
        <section className="Photo">
          <h2> {name} </h2>
          <img src={image} alt={name} />
        </section>
      </>
    );
  }
  