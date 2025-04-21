import { useState } from 'react'

function SearchBar({ onSelectPokemon }) {
  const [query, setQuery] = useState('')

  const searchPokemon = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      )
      const data = await res.json()
      onSelectPokemon(data)
    } catch (error) {
      console.error('Pokémon not found!')
      onSelectPokemon(null)
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter Pokémon name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchPokemon}>Search</button>
    </div>
  )
}

export default SearchBar
