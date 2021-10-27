import "./style.css";
function PersonCard({ props }) {
  return (
    <div className="UserCard">
      <span>
        <h1> Dev: {props.name}</h1>
        <p> Idade: {props.age}</p>
        <p> País: {props.country}</p>
      </span>
    </div>
  );
}

export default PersonCard;
