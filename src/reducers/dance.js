const danceReducer = (state = false, action) => {
  switch (action.type) {
    case 'DANCE':
      return !state;
    default:
      return state;
  }
};

export default danceReducer;
