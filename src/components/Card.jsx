import starIcon from "../images/star.png";
import katieIMG from "../images/katie-zaferes.png";

export default function Card() {
  return (
    <div className="card">
      <p className="card--status">SOLD OUT</p>
      <img src={katieIMG} className="card--photo" alt="Main card image." />
      <p className="card--review">
        <img src={starIcon} alt="Star icon." />
        5.0 <small>(6) - USA</small>
      </p>
      <h2 className="card--text">Life lessons with Katie Zaferes</h2>
      <p className="card--price">
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
