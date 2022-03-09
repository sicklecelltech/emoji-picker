interface PlacesProps {
  image: string;
  title: string;
  location: string;
  // mapLink: string ;
  description: string;
}

function Places(props: PlacesProps): JSX.Element {
  return (
    <section>
      <img src={props.image} alt=""></img>
      <h2> {props.title}</h2>
      <h3> {props.location}</h3>
      <p> {props.description}</p>
    </section>
  );
}

export default Places;
