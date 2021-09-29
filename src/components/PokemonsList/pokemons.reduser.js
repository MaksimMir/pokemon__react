import { DELETE_POKEMON, ADD_POKEMON } from "./pokemons.actions";

const initialState = [];

const pokemonReduser = (state = initialState, { type, payload }) => {
    switch (type) {  
        case DELETE_POKEMON:
            const newState = state.filter(el => el.id !== payload)
            return [
                ...state,
                newState
            ];
        case ADD_POKEMON:
            return [
                ...state,
                payload
            ];    
        default:
            return state;
    }
}

export default pokemonReduser;