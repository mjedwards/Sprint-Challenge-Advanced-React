import React from "react";
import axios from "axios";
import "./App.css";

import PlayerCard from "./components/PlayerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = { player: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({ player: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.player.map(member => {
          return (
            <div key={member.id}>
              <PlayerCard
                name={member.name}
                country={member.country}
                searches={member.searches}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
