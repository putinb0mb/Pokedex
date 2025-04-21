import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await res.json()
      setPokemonList(data.results)
    }
    fetchPokemon()
  }, [])

  return (
    <div className="page pokedex-page">
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <Link
            to={`/pokemon/${pokemon.name}`}
            key={pokemon.name}
            className="pokemon-link"
          >
            {pokemon.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Pokedex
