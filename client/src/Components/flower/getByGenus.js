import React, { useEffect, useState } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import FlowerCards from "./flowerCards";
import Loading from "../loading";
import "../stylingComponents/cards.css";

const GetByGenus = (props) => {
  const [flowers, setFlowers] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [genus, setGenus] = useState(" ");
  const [error, setError] = useState(" ");

  const gen = [
    "cosmo",
    "hyacinth",
    "lily",
    "mum",
    "pansy",
    "rose",
    "tulip",
    "windflower",
  ];

  function getGenus(g) {
    fetch(`/flowers/${g}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setFlowers(response);
        setLoading(false);
        setGenus(g);
      })
      .catch((err) => {
        setError(err);
        setRedirect(true);
      });
  }

  useEffect(() => {
    if (gen.includes(props.match.params.genus)) {
      getGenus(props.match.params.genus);
    } else {
      setRedirect(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            desc={flower.desc}
          />
        </div>
      );
    });
  }

  if (redirect) {
    console.log(error);
    return <Redirect to="/" />;
  }

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div className="cardsContainer">
      <Card className="genus">
        <Card.Body>
          <Card.Title>
            <h1>
              {genus[0].toLocaleUpperCase() + genus.slice(1, genus.length)}'s
            </h1>
          </Card.Title>
        </Card.Body>
      </Card>

      <Row className="cardsRow">{cards(flowers)}</Row>
    </div>
  );
};
export default GetByGenus;
