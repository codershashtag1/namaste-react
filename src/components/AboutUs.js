import { Component }  from "react";
import UserClass from "./UserClass";

class AboutUs extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log("setInterval");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  } 

  render() {
    return (
      <div className="about-us-container">
        <h1>About Us</h1>
        <UserClass name="Darshana Pandey" location="Kalyan" />
      </div>
    )
  }
}

export default AboutUs;