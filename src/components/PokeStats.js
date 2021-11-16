import React from "react";
import { Col, Row } from "react-bootstrap";

function PokeStats({ stats }) {
  return (
    <div className="mt-4">
      <h3>Base Stats</h3>
      <Row>
        {stats.map((stat, i) => {
          return (
            <Col xs={6} md={4} lg={3} key={i} >
              <div>
                <small className="text-capitalize text-muted">{stat.stat.name}</small>
                <h5>{stat.base_stat}</h5>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default PokeStats;
