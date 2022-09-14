import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./App.scss";
import { useNavigate } from "react-router-dom";

function TextLinkExample({ emailData }) {
  let navigate = useNavigate();
  let logout = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="secondary" variant="dark" className="home_navbar">
        <Navbar.Brand href="#home">
          <img src={require("./../Assests/logo.png")} alt="logo" width="80" />
          FriendZone Cart
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{emailData}</a>
          </Navbar.Text>
          <Navbar.Text>
            <Button variant="warning" onClick={logout}>
              LOGOUT
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TextLinkExample;
