import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useColorChanger } from "./hooks/useColorChanger";

const PlayerCard = props => {
  const [darkMode, setDarkMode] = useColorChanger(true);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='flex-container'>
      <div className='card-container'>
        <Card>
          <CardBody>
            <div className='color__toggler'>
              <div
                onClick={toggleMode}
                className={darkMode ? "toggler toggled" : "toggler"}
              ></div>
            </div>
            <CardTitle>
              Name: <br />
              {props.name}
            </CardTitle>
            <hr />
            <CardSubtitle>
              Country: <br />
              {props.country} <br />
              <hr />
              <br /> Searches: <br />
              {props.searches}
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PlayerCard;
