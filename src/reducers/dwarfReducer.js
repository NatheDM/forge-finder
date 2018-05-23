const initialState = {
  dwarves: [
    {
      name: "Butts",
      height: "3",
      clan: "Bronzebottom",
      occupation: "Beard Stylist",
      beardColor: "brown",
      id: 1
    },
    {
      name: "Ammon",
      height: "5",
      clan: "Clanless",
      occupation: "Miner",
      beardColor: "green",
      id: 2
    },
    {
      name: "Bruenor",
      height: "4'6",
      clan: "Battlehammer",
      occupation: "Fighter",
      beardColor: "red",
      id: 3
    }
  ],

  clans: [
    { name: "Battlehammer" },
    { name: "Bouldershoulder" },
    { name: "Bronzebottom" },
    { name: "MacDumathoin" },
    { name: "McGuillicuddy" },
    { name: "Oakenshield" },
    { name: "Clanless", cosmetic: "... other" }
  ],

  occupations: [
    "Armorsmith",
    "Beard Stylist",
    "Blacksmith",
    "Brewer",
    "Fighter",
    "Gemsmith",
    "Miner",
    "Weaponsmith",
    "... other"
  ],

  beards: [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "brown",
    "white",
    "grey",
    "black"
  ]
};

let dwarfId = 3;

const dwarfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DWARF":
      dwarfId++;
      return {
        ...state,
        dwarves: [...state.dwarves, { ...action.payload, id: dwarfId }]
      };
    default:
      return state;
  }
};

export default dwarfReducer;
