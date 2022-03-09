import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import createCharacter from "./helper";
function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;

      case REMOVE_CHARACTER:
          let newChar = state.filter(hero=>hero.id!==action.id)
          return newChar

    default:
      return state;
  }
}

export default heroes;
