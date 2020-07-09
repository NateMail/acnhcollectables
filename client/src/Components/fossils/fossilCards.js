import React from "react";
import { Card } from "react-bootstrap";
import "../stylingComponents/cards.css";

const FossilCards = (props) => {
  return (
    <div>
      <Card className="fossil-card-display">
        <Card.Img className="fossil-img" variant="top" src={props.photo} />
        <Card.Body className="fossil-body">
          <Card.Title className="text-center">
            <h1>{props.name}</h1>
          </Card.Title>
          <Card.Text className="fossil-price">
            Sells for: <br /> {props.price} bells
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FossilCards;
