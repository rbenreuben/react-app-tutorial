import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello world",
    };
  }

  render() {
    return (
      <div className="mt-4 d-flex justify-content-center">
        <div className="w-75">
          <Card>
            <Card.Header>Homepage</Card.Header>
            <Card.Body>
              <Card.Title>Welcome to P&G's React Tutorial Site. </Card.Title>
              <Card.Text>
                To gain familiarity with frontend React development and Github
                flow,{" "}
                <a
                  href="https://github.com/procter-gamble/react-app-tutorial"
                  target="_blank"
                >
                  clone this application
                </a>{" "}
                and add your own card to the Cards tab!
              </Card.Text>
              <Button href="/cards">Go to Cards Tab</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Homepage;
