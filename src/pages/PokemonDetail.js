import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function PokemonDetail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json()
      setPokemon(data)
    }
    fetchPokemon()
  }, [name])

  if (!pokemon) return <div>Loading...</div>

  return (
    <div className="page detail-page">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  )
}

export default PokemonDetail
