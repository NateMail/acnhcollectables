import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { fullMonth } from "../helpers";
import axios from "axios";
import FishCards from "./fishCards";
import Loading from "../loading";
import "../stylingComponents/cards.css";

const MonthFish = (props) => {
  const [fishs, setFishs] = useState([]);
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
    const result = await axios(`/fishs/north/${m}`);
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }
    setFishs(result.data);
    setLoading(false);
    setMonth(m);
    setHemi("North");
  };

  const south = async (m) => {
    const result = await axios(`/fishs/south/${m}`);
    if (result.error) {
      setError(result.error);
      setRedirect(true);
    }
    setFishs(result.data);
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

  function fishCards(fishs) {
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
              {`${hemi}ern`} Hemisphere Fish for: <br /> {`${fullMonth(month)}`}
            </h1>
          </Card.Title>
        </Card.Body>
      </Card>
      <Row className="cardsRow">{fishCards(fishs)}</Row>
    </div>
  );
};
export default MonthFish;
