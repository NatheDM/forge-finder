let dwarfId = 0;

const dwarves = (state = [], action) => {
  switch (action.type) {
    case "ADD_DWARF":
      dwarfId++;
      return [...state.dwarves, { ...action.payload, id: dwarfId }];
    default:
      return state;
  }
};

export default dwarves;
