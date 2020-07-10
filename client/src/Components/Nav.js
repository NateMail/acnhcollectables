import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavBar from "react-bootstrap/Navbar";
import { withRouter } from "react-router-dom";
import "./stylingComponents/nav.css";

const Navigation = () => (
  <NavBar collapseOnSelect expand="lg" className="nav">
    <NavBar.Brand href="/">Home</NavBar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/bugs">Bugs</Nav.Link>
        <Nav.Link href="/fish">Fish</Nav.Link>
        <Nav.Link href="/fossils">Fossils</Nav.Link>
        <Nav.Link href="/sea">Sea Creatures</Nav.Link>

        <NavDropdown title="Flowers" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/flower">All Flowers</NavDropdown.Item>
          <NavDropdown.Item href="/flower/cosmo">Cosmos</NavDropdown.Item>
          <NavDropdown.Item href="/flower/hyacinth">Hyacinths</NavDropdown.Item>
          <NavDropdown.Item href="/flower/lily">Lilys</NavDropdown.Item>
          <NavDropdown.Item href="/flower/mum">Mums</NavDropdown.Item>
          <NavDropdown.Item href="/flower/pansy">Pansys</NavDropdown.Item>
          <NavDropdown.Item href="/flower/rose">Roses</NavDropdown.Item>
          <NavDropdown.Item href="/flower/tulip">Tulips</NavDropdown.Item>
          <NavDropdown.Item href="/flower/windflower">
            Windflowers
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Months" id="collasible-nav-dropdown">
          <NavDropdown title="January" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/jan">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/jan">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/jan">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/jan">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/jan">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/jan">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="February" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/feb">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/feb">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/feb">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/feb">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/feb">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/feb">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="March" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/mar">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/mar">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/mar">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/mar">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/mar">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/mar">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="April" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/apl">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/apl">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/apl">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/apl">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/apl">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/apl">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="May" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/may">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/may">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/may">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/may">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/may">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/may">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="June" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/jun">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/jun">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/jun">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/jun">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/jun">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/jun">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="July" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/jul">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/jul">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/jul">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/jul">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/jul">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/jul">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="August" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/aug">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/aug">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/aug">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/aug">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/aug">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/aug">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="September" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/sept">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/sept">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/sept">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/sept">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/sept">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/sept">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="October" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/oct">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/oct">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/oct">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/oct">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/oct">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/oct">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="November" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/nov">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/nov">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/nov">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/nov">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/nov">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/nov">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="December" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/bugs/north/dec">
              Northen Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/north/dec">
              Northern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/north/dec">
              Northern Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/bugs/south/dec">
              Southern Bugs
            </NavDropdown.Item>
            <NavDropdown.Item href="/fish/south/dec">
              Southern Fish
            </NavDropdown.Item>
            <NavDropdown.Item href="/sea/south/dec">
              Southern Sea Creatures
            </NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </NavBar>
);

export default withRouter(Navigation);
