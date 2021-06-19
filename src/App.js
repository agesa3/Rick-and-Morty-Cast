import "./App.css";
import { useEffect, useState } from "react";
import { Navbar, Container, CardColumns, Card, Button } from "react-bootstrap";
import image from "./img/rick.png";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={image}
            width="50"
            height="50"
            className="d-inline-block align-center"
          />
          Rick And Morty
        </Navbar.Brand>
      </Navbar>
      <Container>
        <CardColumns>
          {data.map((character) => (
            <Card className="m-4" key={character.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>{character.species}</Card.Text>
                <Button variant="primary" href={character.url} target="_blank">
                  More Info
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </>
  );
}

export default App;
