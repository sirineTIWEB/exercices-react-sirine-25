import React from "react";
import Header from "./Header";
import Curdate from "./Curdate";
import Taches from "./Taches";



class Agenda extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { name, tasks } = this.props;
    return (
      <div className="agenda-container"  >
        <Header name={`${name} de frédéric jamoulle `}>
          <Curdate />
          <Taches tasks={tasks} ></Taches>
        </Header>
      </div>
    );
  }
}



export default Agenda;