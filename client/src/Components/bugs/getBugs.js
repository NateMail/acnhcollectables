import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import BugCards from "./bugCards";
import "../stylingComponents/cards.css";
import Loading from "../loading";
import axios from "axios";

const GetBugs = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const bugsGetter = async () => {
    const result = await axios("/bug");
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }
    setBugs(result.data);
    setLoading(false);
  };

  useEffect(() => {
    bugsGetter();
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
      <Card className="top-card">
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
