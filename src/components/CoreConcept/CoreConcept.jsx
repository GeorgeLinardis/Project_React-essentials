
import "./CoreConcept.css";

function CoreConcept ({ title, alt, description, image }) {
  return (
    <li key={title}>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcept;
