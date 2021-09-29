const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const handlerFetch = (address) => fetch(address).then(response => response.json());

export const ADD_POKEMON = 'ADD_POKEMON';

export const addPokemon = name => {
    return {
        type: ADD_POKEMON, 
        payload: name
    }
}

export const DELETE_POKEMON = 'DELETE_POKEMON';

export const deletePokemon = id => {
    return {
        type: DELETE_POKEMON,
        payload: id
    }
}

export const getPokemons = () => dispatch => {
    handlerFetch(baseUrl)
        .then(pokemons => {
            const list = pokemons.results;
            for (let i = 0; i < list.length; i++) {
                handlerFetch(list[i].url)
                    .then(data => dispatch(addPokemon(data)));
            }});
}