import React from 'react'
import pikachu from "../assets/img/pikachu.png"

const Home = () => {
  return (
    <div className='container'>
        <section className='section'>
            <h1>Bienvenido <span className='title-home'>Maestro Pokémon</span></h1>
            <img className='img-home' src={pikachu} alt="pikachu" />
        </section>
    </div>
  )
}

export default Home