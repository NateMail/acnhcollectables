import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Card } from "react-bootstrap";
import FishCards from "./fishCards";
import axios from "axios";
import "../stylingComponents/cards.css";
import Loading from "../loading";

const GetFish = () => {
  const [fishs, setFishs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const getFish = async () => {
    const result = await axios("/fishs");
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }
    setFishs(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getFish();
  }, []);

  function cards(fishs) {
    return fishs.map(function (fish, idx) {
      const fishPic =
        "data:image/png;base64, " +
        btoa(String.fromCharCode.apply(null, fish.photo.data.data));
      return (
        <div key={idx} className="cards">
          <FishCards
            name={fish.name}
            price={fish.price}
            timeOfDay={fish.timeOfDay}
            spawnArea={fish.spawnArea}
            shadow={fish.shadow}
            description={fish.description}
            photo={fishPic}
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
            <h1>All of the Fish</h1>
          </Card.Title>
        </Card.Body>
      </Card>
      <Row className="cardsRow">{cards(fishs)}</Row>
    </div>
  );
};

export default GetFish;
