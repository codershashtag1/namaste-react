import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { name, location } = this.props;
    return(
      <div className="user-container">
        <h1>User Class</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    )
  }
}

export default UserClass;