import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import KatiePhoto from "./images/katie-zaferes.png";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card
        status="SOLD OUT"
        photo={KatiePhoto}
        rating="5.0"
        numberOfReviews="6"
        country="USA"
        cardTitle="Life lessons with Katie Zaferes"
        price="136"
      />
      <Card
        status=""
        photo=""
        rating=""
        numberOfReviews=""
        country=""
        cardTitle=""
        price=""
      />
      <Card
        status=""
        photo=""
        rating=""
        numberOfReviews=""
        country=""
        cardTitle=""
        price=""
      />
    </>
  );
}
