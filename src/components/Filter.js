import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Filter() {
  const history = useHistory();
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("normal");

  const getTypes = async () => {
    const data = await axios.get("https://pokeapi.co/api/v2/type");
    setTypes(data.data.results);
  };

  const searchType = () => {
    history.push("/filter");
    console.log(type)
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <div>
      <Form.Group>
        <label className="mb-1">By Type</label>
        <Row>
          <Col xs={10} md={10} lg={10}>
            <Form.Select
              className="text-capitalize"
              onChange={(e) => setType(e.target.value)}
            >
              {types.map((t, i) => {
                return (
                  <option key={i} value={t.name}>
                    {t.name}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col xs={2} md={2} lg={2}>
            <Button onClick={searchType}>Go</Button>
          </Col>
        </Row>
      </Form.Group>
    </div>
  );
}

export default Filter;
