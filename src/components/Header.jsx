import headerIMG from "../images/photo-grid.png";

export default function Header() {
  return (
    <header className="header--container">
      <img src={headerIMG} alt="" className="header--img" />
      <h1 className="header--title">Online Experiences</h1>
      <p className="header--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </header>
  );
}
