import React, { useEffect, useState } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import FossilCards from "./fossilCards";
import axios from "axios";
import Loading from "../loading";
import "../stylingComponents/cards.css";

const GetFossils = () => {
  const [fossils, setFossils] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(" ");
  const [redirect, setRedirect] = useState(false);

  const getFlower = async () => {
    const result = await axios("/fossil");
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }
    setFossils(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getFlower();
  }, []);

  function cards(fossils) {
    return fossils.map(function (fossil, idx) {
      const fossilPic =
        "data:image/png;base64, " +
        btoa(String.fromCharCode.apply(null, fossil.photo.data.data));

      return (
        <div key={idx} className="cards">
          <FossilCards
            name={fossil.name}
            price={fossil.price}
            photo={fossilPic}
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
            <h1>All Fossils</h1>
          </Card.Title>
        </Card.Body>
      </Card>

      <Row className="cardsRow">{cards(fossils)}</Row>
    </div>
  );
};
export default GetFossils;
