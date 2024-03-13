import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import CardsData from "./assets/ExperienceCardsData";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="cards-container">
        {CardsData.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
    </>
  );
}
