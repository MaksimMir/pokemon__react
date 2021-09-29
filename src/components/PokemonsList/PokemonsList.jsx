import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../Pokemon/Pokemon";
import { getPokemons } from './pokemons.actions'


const PokemonsList = () => {
    const pokemonlist = useSelector(state => state);
    const dispatch = useDispatch();
    const [ flag, setFlag ] = useState(false);
    const [ arr, setArr ] = useState([]);

    useEffect(() => {
        if (!arr.length && !flag ) {
            dispatch(getPokemons());
            setFlag(true)
        }
    }, [arr])
    return (
        <ul className="list">
            {pokemonlist?.map(el => <Pokemon key={el.id} pokemon={el} />)}
        </ul>
    )
}

export default PokemonsList;