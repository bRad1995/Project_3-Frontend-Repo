import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function Home({ home }) {
  const homeArr = home.map(function (Home, index) {
    return (
      <section id="homepage" className="block home-block">
        <Container fluid>
          <Row>
            <Col sm={4} key={index}>
              <div className="holder">
                <Card>
                  <Card.Img variant="top" src={home.image} />
                  <Card.Body>
                  <h3>{home.name}</h3>
                    <a href="#" className="btn btn-primary">Visit Portfolio</a>
                  </Card.Body>
                </Card>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  });

  return <div className="Card row row-cols-1 row-cols-md-3 g-4 width 18em">{homeArr}</div>;
}

export default Home;
