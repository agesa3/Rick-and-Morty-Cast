import "./App.css";
import { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  CardColumns,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
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

  function showModal() {
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>;
  }

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
                <Button variant="primary">More Info</Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    </>
  );
}

export default App;
