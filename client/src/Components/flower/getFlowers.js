import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import FlowerCards from "./flowerCards";
import Loading from "../loading";
import "../stylingComponents/cards.css";

const GetFlowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(" ");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`/flowers`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setFlowers(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setRedirect(true);
      });
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
      <Row className="cardsRow">{cards(flowers)}</Row>
    </div>
  );
};
export default GetFlowers;
