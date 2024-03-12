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
          <Card
            key={data.id}
            status={data.openSpots}
            photo={`./images/${data.coverImg}`}
            rating={data.stats.rating}
            numberOfReviews={data.stats.reviewCount}
            country={data.location}
            cardTitle={data.title}
            price={data.price}
          />
        ))}
      </div>
    </>
  );
}
