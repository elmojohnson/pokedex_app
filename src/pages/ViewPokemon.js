import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useHistory, useParams } from "react-router-dom";
import PokeAbilities from "../components/PokeAbilities";
import PokeDesc from "../components/PokeDesc";
import PokeMoves from "../components/PokeMoves";
import PokeStats from "../components/PokeStats";
import PokeTypes from "../components/PokeTypes";
import ViewPokeLoader from "../components/ViewPokeLoader";
import { BsChevronLeft } from "react-icons/bs";
import Layout from "../components/Layout";
import pokeball from "../assets/pokeball.png";

function ViewPokemon() {
  const { name } = useParams();
  const history = useHistory();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, setPokemon] = useState({
    id: 0,
    sprite: "",
    types: [],
    moves: [],
    stats: [],
    species: "",
    abilities: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getPokemon = async () => {
      const data = await axios.get(url);
      const p = data.data;
      setPokemon({
        id: p.id,
        sprite: p.sprites.other.home.front_default,
        types: p.types,
        moves: p.moves,
        stats: p.stats,
        species: p.species,
        abilities: p.abilities,
      });
      setLoading(false);
    };
    getPokemon();
  }, []);

  return (
    <div>
      <Layout>
        {loading ? (
          <ViewPokeLoader />
        ) : (
          <Container className="py-3">
            <Row>
              <Col xs={12} md={4} lg={4} className="text-center">
                <Button
                  variant="secondary"
                  className="btn-sm float-start"
                  onClick={() => history.push("/")}
                >
                  <BsChevronLeft />
                </Button>
                {pokemon.sprite ? (
                  <LazyLoadImage
                    src={pokemon.sprite}
                    className="img-fluid"
                    effect="blur"
                  />
                ) : (
                  <LazyLoadImage
                    src={pokeball}
                    className="img-fluid"
                    effect="blur"
                  />
                )}
                <div className="mt-4">
                  <p>
                    {pokemon.types.length === 1 ? "Type" : "Types"}{" "}
                    <PokeTypes types={pokemon.types} />
                  </p>
                  <p>
                    {pokemon.abilities.length === 1 ? "Ability" : "Abilities"}{" "}
                    <PokeAbilities abilities={pokemon.abilities} />
                  </p>
                </div>
              </Col>
              <Col xs={12} md={8} lg={8}>
                <p className="lh-1">
                  <b className="fs-3 text-muted">#{pokemon.id}</b>&nbsp;
                  <span className="display-6 text-capitalize">{name}</span>
                </p>
                <PokeDesc url={pokemon.species.url} />
                <PokeStats stats={pokemon.stats} />
                <PokeMoves moves={pokemon.moves} />
              </Col>
            </Row>
          </Container>
        )}
      </Layout>
    </div>
  );
}

export default ViewPokemon;
