function PokedexScreen({ pokemon }) {
  if (!pokemon) {
    return <div className="empty-screen">Search for a Pokémon!</div>
  }

  return (
    <div className="pokemon-info">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  )
}

export default PokedexScreen
