import './CoreConcept.css';

interface CoreConceptProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const CoreConcept: React.FC<CoreConceptProps> = ({
  title, image, description,
  alt,
}) => (
  <li key={title}>
    <img src={image} alt={alt} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
);

export default CoreConcept;
