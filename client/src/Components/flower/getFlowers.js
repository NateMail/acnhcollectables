import React, { useEffect, useState } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import FlowerCards from "./flowerCards";
import axios from "axios";
import Loading from "../loading";
import "../stylingComponents/cards.css";

const GetFlowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(" ");
  const [redirect, setRedirect] = useState(false);

  const getFlower = async () => {
    const result = await axios("/flowers");
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }
    setFlowers(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getFlower();
  }, []);

  function cards(flowers) {
    return flowers.map(function (flower, idx) {
      const flowerPic =
        "data:image/png;base64, " +
        btoa(String.fromCharCode.apply(null, flower.photo.data.data));

      return (
        <div key={idx} className="cards">
          <FlowerCards
            name={flower.name}
            price={flower.price}
            photo={flowerPic}
            genus={flower.genus}
            desc={flower.desc}
          />
        </div>
      );
    });
  }

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (redirect) {
    console.log(error);
    return <Redirect to="/" />;
  }

  return (
    <div className="cardsContainer">
      <Card className="top-card">
        <Card.Body>
          <Card.Title>
            <h1>All Flowers</h1>
          </Card.Title>
        </Card.Body>
      </Card>

      <Row className="cardsRow">{cards(flowers)}</Row>
    </div>
  );
};
export default GetFlowers;
