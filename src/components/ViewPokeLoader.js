import { Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

function ViewPokeLoader() {
  return (
    <div className="container mt-4">
      <Row>
        <Col xs={4} md={4} ld={12}>
          <Skeleton height={200} width={200} circle />
        </Col>
        <Col xs={8} md={8} ld={12}>
          <Skeleton height={200} className="mb-4" />
          <Skeleton height={200} className="mb-4" />
          <Skeleton height={400} className="mb-4" />
        </Col>
      </Row>
    </div>
  );
}

export default ViewPokeLoader;
