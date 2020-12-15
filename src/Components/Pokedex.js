import Axios from 'axios';
import { useState, useEffect } from 'react';

function Pokedex() {
    // use useState to handle the pokemonName and pokemonImage
    const [pokemonName, setPokemonName] = useState('pikachu')
    const [pokemonImage, setPokemonImage] = useState('')

    useEffect(() => {
        console.log('infinite loop if repeated')
        if (pokemonName === '') {
            return
        } 

        if(setPokemonName === pokemonName){
            return
        }
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => {
            setPokemonImage(res.data.sprites.front_default)
        })
        .catch((err) => {
            console.log(err)
            setPokemonImage('')
        })
    }, [pokemonName])

    return(
    <div>
        <h1>Fisher-Price My First Function Pokedex</h1>
        <input value={pokemonName} onChange={(e) => 
            {setPokemonName(e.target.value.toLowerCase())}} />
            <br />
        <img src={pokemonImage} alt="Pokemon" />
    </div>
    )
}
export default Pokedex;