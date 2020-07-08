import React from "react";
import "./stylingComponents/home.css";

const Home = () => (
  <>
    <div className="home">
      <h1 className="home-header">
        Animal Crossing New Horizions Collectable App
      </h1>
      <br />

      <h2 className="text-center">About This App</h2>
      <p className="home-p">
        I created this app, because I wanted an easy way to see what was
        available each month in Animal Crossing New Horizons. The bugs, fish and
        flowers were the things that were giving me the most trouble so I
        decided to tackle those first. Most of the information was required by
        nookiapedia and animal crossing fandom. If there is any information that
        is wrong please don't hesitate to let me know. Some of the loading may
        take a little bit. This application uses a MERN Stack.
      </p>
      <h2 className="text-center">Why am I on the home page?</h2>
      <p className="home-p">
        The application should redirect you if there is an error. If the route
        that has been entered does not exist it will redirect you to this page.
        If something is wrong with the application rendering data then it will
        redirect you to here. If anything else goes wrong hopefully you'll be
        sent here. Think of it as a kinder version of Mr.Resetti.
      </p>

      <h2 className="text-center">Comming Soon...</h2>
      <ul className="text-center" style={{ listStyle: "none" }}>
        <li>Art</li>
        <li>Fossils</li>
        <li>Items</li>
        <li>Villagers</li>
      </ul>
    </div>
  </>
);

export default Home;
