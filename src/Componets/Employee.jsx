import React from "react";

class Employee extends React.Component {
  render() {
    const {id, name, position, fire} = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td>
          <button onClick={()=>fire(id)}>Fire</button>
        </td>
      </tr>
    );
  }
}

export default Employee;
