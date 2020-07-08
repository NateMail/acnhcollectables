import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { fullMonth } from "../helpers";
import SeaCards from "./seaCards";
import Loading from "../loading";
import "../stylingComponents/cards.css";

const MonthSea = (props) => {
  const [creatures, setCreatures] = useState([]);
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

  function north(m) {
    fetch(`/seas/north/${m}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setCreatures(response);
        setLoading(false);
        setMonth(m);
        setHemi("North");
      })
      .catch((err) => {
        setError(err);
        setRedirect(true);
      });
  }

  function south(m) {
    fetch(`/seas/south/${m}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setCreatures(response);
        setLoading(false);
        setMonth(m);
        setHemi("South");
      })
      .catch((err) => {
        setError(err);
        setRedirect(true);
      });
  }

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

  function seaCards(creatures) {
    return creatures.map(function (creature, idx) {
      const creaturePic =
        "data:image/png;base64," +
        btoa(String.fromCharCode.apply(null, creature.photo.data.data));

      return (
        <div key={idx} className="cards">
          <SeaCards
            name={creature.name}
            price={creature.price}
            timeOfDay={creature.timeOfDay}
            swim={creature.swim}
            shadow={creature.shadow}
            description={creature.description}
            photo={creaturePic}
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
      <Card className="month">
        <Card.Body>
          <Card.Title>
            <h1>
              {`${hemi}ern`} Hemisphere Sea Creatures for: <br />{" "}
              {`${fullMonth(month)}`}
            </h1>
          </Card.Title>
        </Card.Body>
      </Card>
      <Row className="cardsRow">{seaCards(creatures)}</Row>
    </div>
  );
};
export default MonthSea;
