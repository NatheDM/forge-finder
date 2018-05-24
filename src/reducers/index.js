import { combineReducers } from "redux";
import clans from "./clans.js";
import occupations from "./occupations.js";
import beards from "./beards.js";
import dwarves from "./dwarves.js";

export default combineReducers({
  clans,
  occupations,
  beards,
  dwarves
});
