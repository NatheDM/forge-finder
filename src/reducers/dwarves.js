import services from "../service";

let dwarfId = 0;

const dwarves = (state = [], action) => {
  switch (action.type) {
    case "ADD_DWARF":
      dwarfId++;
      services.dwarves.add({ ...action.payload, _id: 0 });
      return [...state, { ...action.payload, id: dwarfId }];
    case "LOAD_DWARF":
      if (action.payload.length > 0) {
        dwarfId = action.payload
          .map(dwrf => dwrf.id)
          .reduce((max, int) => (max = max > int ? max : int));
      }
      return [...action.payload];
    case "REMOVE_DWARF":
      services.dwarves.delete(action.payload);
      return [...state.filter(dwrf => dwrf._id !== action.payload)];
    default:
      return state;
  }
};

export default dwarves;
