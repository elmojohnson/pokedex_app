import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import NavButton from "./NavButton";
import PokeItem from "./PokeItem";
import PokeLoader from "./PokeLoader";

function PokeList() {
  let last_url = window.localStorage.getItem("last_url");
  let [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(
    last_url ? last_url : `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
  );
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const getList = async (url) => {
    const res = await axios.get(url);
    setCurrent(url);
    setList(res.data.results);
    setNext(res.data.next);
    setPrev(res.data.previous);
    setLoading(false);
  };

  useEffect(() => {
    getList(current);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("last_url", current);
  }, [current]);

  const showNext = () => {
    setLoading(true);
    getList(next);
  };

  const showPrev = () => {
    setLoading(true);
    getList(prev);
  };

  return (
    <Container>
      {loading ? (
        <PokeLoader />
      ) : (
        <div>
          <Row>
            {list.map((poke, index) => {
              return <PokeItem key={index} name={poke.name} url={poke.url} />;
            })}
          </Row>
          <NavButton
            next={next}
            prev={prev}
            showNext={showNext}
            showPrev={showPrev}
          />
        </div>
      )}
    </Container>
  );
}

export default PokeList;
