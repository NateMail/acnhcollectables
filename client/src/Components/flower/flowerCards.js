import React from "react";
import { Card } from "react-bootstrap";
import "../stylingComponents/cards.css";

const FlowerCards = (props) => {
  return (
    <div>
      <Card className="flower-card-display">
        <Card.Img className="flower-img" variant="top" src={props.photo} />
        <Card.Body className="flower-body">
          <Card.Title className="text-center">
            <h1>{props.name}</h1>
          </Card.Title>
          <Card.Text className="flower-price">
            Sells for: <br /> {props.price} bells
          </Card.Text>
          <Card.Text
            className="flower-recipe"
            style={{
              backgroundColor: "white",
              padding: "7%",
              borderRadius: "50%",
            }}
          >
            Recipe: <br /> {props.desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FlowerCards;
