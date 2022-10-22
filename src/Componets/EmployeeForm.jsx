import React from "react";

class EmployeeForm extends React.Component {
  state = {
    id: "",
    name: "",
    position: "",
  };
  render() {
    const { id, name, position } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" value={id} onChange={this.handleChange}/>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
        <label htmlFor="position">Position</label>
        <input type="text" name="position" id="position" value={position} onChange={this.handleChange}/>
        <input type="submit" value="Hire" />
      </form>
    );
  }
  handleChange = e=>{
    const {name, value} = e.target;
    this.setState({
        [name]:value,
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
   const {hire} = this.props;
   hire(this.state)
  }
}

export default EmployeeForm;
