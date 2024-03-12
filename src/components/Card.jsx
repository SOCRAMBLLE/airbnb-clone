import starIcon from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <p className="card--status">{props.status}</p>
      <img src={props.photo} className="card--photo" alt="Main card image." />
      <p className="card--review">
        <img src={starIcon} alt="Star icon." />
        {props.rating}{" "}
        <small>
          ({props.numberOfReviews}) - {props.country}
        </small>
      </p>
      <h2 className="card--text">{props.cardTitle}</h2>
      <p className="card--price">
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
