import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DogList from "./DogList";

function App(props) {
  return (
    <Routes>
      <Route exact path="/dogs" element={<DogList name={props.name} />} />
      {/* <Route
          path="/dogs/:name"
          element={<DogDetails facts={props.facts} />}
        /> */}
    </Routes>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "https://www.humanesociety.org/sites/default/files/2019/02/dog-451643.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "https://i2-prod.birminghammail.co.uk/incoming/article22729723.ece/ALTERNATES/s1200c/1_dogs-home-bear.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "https://www.boston.com/wp-content/uploads/2020/11/image0-23-5fb51ce9674bf.jpeg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://images.squarespace-cdn.com/content/v1/58ed866a37c5819805486a69/1539217883845-ECKIXY58YMMSQ955EWKK/chase+2.PNG?format=1000w",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
