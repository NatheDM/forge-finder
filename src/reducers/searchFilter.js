const searchFilter = (state = "", action) => {
  switch (action.type) {
    case "FILTER_COLOR":
      return action.payload;
    default:
      return state;
  }
};

export default searchFilter;
