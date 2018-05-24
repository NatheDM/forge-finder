import { combineReducers } from "redux";
import clans from "./clans.js";
import occupations from "./occupations.js";
import beards from "./beards.js";
import dwarves from "./dwarves.js";
import searchFilter from "./searchFilter.js";

export default combineReducers({
  clans,
  occupations,
  beards,
  dwarves,
  searchFilter
});
