import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../PokemonsList/pokemons.actions";
import { useDebounse } from "./UseDebounce";

const SearchForm = () => {
    const [ name, setName] = useState('');
    const debounsedValue = useDebounse(name, 1000);
    const dispatch = useDispatch();
    useEffect(() => {
        if (debounsedValue) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(response => response.json())
                .then(data => dispatch(addPokemon(data)))
        }
    }, [debounsedValue])
    return (
        <form className="form">
            <input value={name} onChange={evt => setName(evt.target.value)} type="text" className="form__input" />
            <button className="form__btn">Search</button>
        </form>
    )
}

export default SearchForm;