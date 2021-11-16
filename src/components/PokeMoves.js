import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function PokeMoves({ moves }) {
  return (
    <div className="mt-4">
      <h3>Moves</h3>
      <Row>
        {moves.map((move, i) => {
          return (
            <Col lg={4} md={6} xs={12} className="text-capitalize p-1" key={i}>
              <Container>{move.move.name}</Container>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default PokeMoves;
