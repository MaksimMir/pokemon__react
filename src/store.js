import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import pokemonReduser from "./components/PokemonsList/pokemons.reduser";

const store = createStore(pokemonReduser, composeWithDevTools(applyMiddleware(thunk)));

export default store;