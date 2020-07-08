import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import BugCards from "./bugCards";
import "../stylingComponents/cards.css";
import Loading from "../loading";

const GetBugs = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/bug`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setBugs(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setRedirect(true);
      });
  }, []);

  function cards(bugs) {
    return bugs.map(function (bug, idx) {
      const bugPic =
        "data:image/png;base64, " +
        btoa(String.fromCharCode.apply(null, bug.photo.data.data));

      return (
        <div key={idx} className="cards">
          <BugCards
            name={bug.name}
            price={bug.price}
            timeOfDay={bug.timeOfDay}
            spawnArea={bug.spawnArea}
            description={bug.description}
            photo={bugPic}
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
            <h1>All of the Bugs</h1>
          </Card.Title>
        </Card.Body>
      </Card>
      <Row className="cardsRow">{cards(bugs)}</Row>
    </div>
  );
};

export default GetBugs;
