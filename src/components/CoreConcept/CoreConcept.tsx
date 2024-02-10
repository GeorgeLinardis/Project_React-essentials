import "./CoreConcept.css";

interface CoreConceptProps {
  title: string;
  description: string;
  image: string;
}

const CoreConcept: React.FC<CoreConceptProps> =  ({
  title, image, description,
}) => {
  return (
    <li key={title}>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default CoreConcept;
