import React from "react";
import { Card, Button } from "react-bootstrap";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Add your card here.",
    };
  }

  render() {
    return (
      <h5 className="m-4">
        <div className="container mt-2">
          <div className="row mw-100 justify-content-between">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFQ1JbIXrrhfQ/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=T6fvazJXhB23hX4Y-UjXy3GKcH2mJTCVhLLU7KxdYV4"
              />
              <Card.Body>
                <Card.Title>Lamarr Henry</Card.Title>
                <Card.Text>
                  Software Engineer from Ohio State University
                </Card.Text>
                <Button
                  href="https://www.linkedin.com/in/lamarr-henry-a20218141/"
                  target="_blank"
                >
                  Let's Connect
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Aaron Osborne</Card.Title>
                <Card.Text>Software Engineer who is a Michigan fan</Card.Text>
                <Button href="https://github.com/osbornea" target="_blank">
                  Check out my GitHub Profile
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </h5>
    );
  }
}

export default Cards;
