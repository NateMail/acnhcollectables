import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card, Button } from "react-bootstrap";
import "../stylingComponents/cards.css";

const FishCards = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card className="card-display">
          <Card.Img className="bugs-fish-img" variant="top" src={props.photo} />
          <Card.Body className="fish-body">
            <Card.Title className="text-center">
              <h1>{props.name}</h1>
            </Card.Title>
            <Card.Text className="text-center">
              Catch Quote:
              <br />
              {props.description}
            </Card.Text>
            <Button variant="primary" onClick={() => setIsFlipped(!isFlipped)}>
              More Info
            </Button>
          </Card.Body>
        </Card>

        <Card className="card-display">
          <Card.Img className="bugs-fish-img" variant="top" src={props.photo} />
          <Card.Body className="fish-body">
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Sells for: {props.price} bells</Card.Text>
            <Card.Text>C.J. buys for: {props.price * 1.5} bells</Card.Text>
            <Card.Text>Spawn Area: {props.spawnArea}</Card.Text>
            <Card.Text>Time of Day: {props.timeOfDay}</Card.Text>
            <Card.Text>Shadow Size: {props.shadow}</Card.Text>
            <Button variant="primary" onClick={() => setIsFlipped(!isFlipped)}>
              Hide Info
            </Button>
          </Card.Body>
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default FishCards;
