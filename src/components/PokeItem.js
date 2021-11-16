import axios from "axios";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useHistory } from "react-router-dom";
import pokeball from '../assets/pokeball.png'

function PokeItem({ url }) {
  const history = useHistory();
  const [pokemon, setPokemon] = useState({
    name: "",
    img: pokeball,
    id: 0
  });

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(url);
      setPokemon({
        name: res.data.name,
        img: res.data.sprites.other.home.front_default,
        id: res.data.id
      });
    };
    getPokemon();
  }, []);

  const viewPokemon = () => {
    history.push(`/${pokemon.name}`);
  };

  return (
    <Col xs={6} md={4} lg={2}>
      <div className="text-center hover" onClick={viewPokemon}>
        {
          pokemon.img ? <LazyLoadImage src={pokemon.img} effect="blur" style={{height:"150px", maxHeight:"100%" }} />
          : <LazyLoadImage src={pokeball} className="img-fluid" effect="blur"/>
        }
        <p className="text-capitalize lead">{pokemon.name}</p>
      </div>
    </Col>
  );
}

export default PokeItem;
