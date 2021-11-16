import {Row, Col} from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';

function PokeLoader() {
    return (
        <div>
            <Row>
                {Array.from({ length: 9 }).map((_, idx) => (
                    <Col key={idx} xs={6} md={4} lg={2} className="mb-4">
                        <center><Skeleton height={100} width={100} circle /></center>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default PokeLoader;
