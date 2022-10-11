import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

const PokemonDetalle = () => {

    const { pokemonSelected } = useParams();
    const endpoint = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemonDetail, setPokemonDetail] = useState({});

    const getPokemonDetail = async (pokemonSelected) => {
        const response = await fetch(`${endpoint}/${pokemonSelected}`);
        const data = await response.json();

        const sprite = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((e) => ({ value: e.base_stat, name: e.stat.name }));
        const types = data.types.map((e) => ({ type: e.type.name }));
        const id = data.id

        console.log(types);

        setPokemonDetail({ sprite, stats, types, id });
    }


    useEffect(() => {
        getPokemonDetail(pokemonSelected);
    }, [pokemonSelected]);

    return (
        <div className='container'>
            <section className='section'>


                <h1 className='pokemon-title'>{pokemonSelected.toUpperCase()} ({pokemonDetail.id})</h1>

                <Row className="justify-content-md-center pokemon-detail-row">
                    <Col  className='col-pokemondetailimg'><img src={pokemonDetail.sprite} className="img-pokemondetail" alt='sprite-pokemon' /></Col>
                    <Col >
                        <Table className='pokemon-stats' striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Stat Name</th>
                                    <th>Stat Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemonDetail.stats?.map((stat) => (
                                    <tr>
                                        <td>{stat.name}</td>
                                        <td>{stat.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <h4>
                            {pokemonDetail.types?.map((type) => (
                                <Badge className="pokemon-type" bg="warning" text="dark">
                                    {type.type.toUpperCase()}
                                </Badge>
                            ))}
                        </h4>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default PokemonDetalle