import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Row, Card } from "react-bootstrap";
import SeaCards from "./seaCards";
import "../stylingComponents/cards.css";
import Loading from "../loading";

const GetFish = () => {
  const [seas, setSeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/seacreature`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setSeas(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setRedirect(true);
      });
  }, []);

  function cards(seas) {
    return seas.map(function (sea, idx) {
      const seaPic =
        "data:image/png;base64, " +
        btoa(String.fromCharCode.apply(null, sea.photo.data.data));

      return (
        <div key={idx} className="cards">
          <SeaCards
            name={sea.name}
            price={sea.price}
            timeOfDay={sea.timeOfDay}
            swim={sea.swim}
            shadow={sea.shadow}
            description={sea.description}
            photo={seaPic}
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
      <Card className="all">
        <Card.Body>
          <Card.Title>
            <h1>All of the Sea Creatures</h1>
          </Card.Title>
        </Card.Body>
      </Card>
      <Row className="cardsRow">{cards(seas)}</Row>
    </div>
  );
};

export default GetFish;
