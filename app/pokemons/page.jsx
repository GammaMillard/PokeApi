import PokeCard from "../components/PokeCard"
import PokeList from "../components/PokeList";
import { fetchData } from "../utilities/utilities"





const PokemonPage = async() => {
    
    const {results, next, previous} = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=151`)

  return (
    <div>

       <PokeList dataList={results} dataNext={next} dataPrevious={previous}/>
    </div>
  )
}

export default PokemonPage