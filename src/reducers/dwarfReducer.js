const initialState = {
  dwarves: [
    {
      name: "Butts",
      height: "3",
      clan: "Bronzebottom",
      occupation: "Beard Stylist",
      beardColor: "brown"
    },
    {
      name: "Ammon",
      height: "5",
      clan: "... other",
      occupation: "Miner",
      beardColor: "green"
    },
    {
      name: "Bruenor",
      height: "4'6",
      clan: "Battlehammer",
      occupation: "Fighter",
      beardColor: "red"
    }
  ]
};

let dwarfId = 0;

const dwarfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DWARF":
      return {
        dwarves: [...state.dwarves, action.payload]
      };
    default:
      return state;
  }
};

export default dwarfReducer;
