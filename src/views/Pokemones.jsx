import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState("");

    const endpoint = 'https://pokeapi.co/api/v2/pokemon/?limit=386';


    const navigate = useNavigate();
    const irAPokemon = () => {
        navigate(`/pokemones/${pokemonSelected}`)
    }

    const getPokemonList = async () => {
        const response = await fetch(endpoint);
        const data = await response.json();

        setPokemones(data.results);
    }

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <div className='container'>
            <section className='section'>
                <h1>Selecciona un Pokémon</h1>

                <Form.Select
                    className="select-pkmn"
                    value={pokemonSelected}
                    onChange={(e) => setPokemonSelected(e.target.value)}>
                    <option>Listado Pokémones</option>
                    {pokemones.map(({ name }) => (
                        <option value={name}>{name.toUpperCase()}</option>
                    ))}
                </Form.Select>

                <Button className='btn-detalle' onClick={irAPokemon} variant="warning">Ver Detalle</Button>

            </section>
        </div>
    )
}

export default Pokemones