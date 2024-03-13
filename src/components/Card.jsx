import starIcon from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <p className="card--status">{badgeText}</p>}
      <img
        src={`./images/${props.coverImg}`}
        className="card--photo"
        alt="Main card image."
      />
      <p className="card--review">
        <img src={starIcon} alt="Star icon." />
        {parseFloat(props.stats.rating).toFixed(1)}{" "}
        <small>
          ({props.stats.reviewCount}) - {props.location}
        </small>
      </p>
      <h2 className="card--text">{props.title}</h2>
      <p className="card--price">
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
