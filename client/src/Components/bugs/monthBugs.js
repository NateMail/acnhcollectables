import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { fullMonth } from "../helpers";
import axios from "axios";
import BugCards from "./bugCards";
import Loading from "../loading";
import "../stylingComponents/cards.css";

const MonthBugs = (props) => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState([
    "jan",
    "feb",
    "mar",
    "apl",
    "may",
    "jun",
    "jul",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
  ]);
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [hemi, setHemi] = useState("");

  const hem = ["north", "south"];

  const north = async (m) => {
    const result = await axios(`/bug/north/${m}`);
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }

    setBugs(result.data);
    setLoading(false);
    setMonth(m);
    setHemi("North");
  };

  const south = async (m) => {
    const result = await axios(`/bug/south/${m}`);
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }

    setBugs(result.data);
    setLoading(false);
    setMonth(m);
    setHemi("South");
  };

  useEffect(() => {
    if (
      month.includes(props.match.params.month) &&
      hem.includes(props.match.params.hem)
    ) {
      if (props.match.params.hem === "north") {
        north(props.match.params.month);
      }

      if (props.match.params.hem === "south") {
        south(props.match.params.month);
      }
    } else {
      setRedirect(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function bugsCards(bugs) {
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

  if (redirect) {
    console.log(error);
    return <Redirect to="/" />;
  }

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <>
      <div className="cardsContainer">
        <Card className="month">
          <Card.Body>
            <Card.Title>
              <h1>
                {`${hemi}ern`} Hemisphere Bugs for: <br />{" "}
                {`${fullMonth(month)}`}
              </h1>
            </Card.Title>
          </Card.Body>
        </Card>
        <Row className="cardsRow">{bugsCards(bugs)}</Row>
      </div>
    </>
  );
};

export default MonthBugs;
