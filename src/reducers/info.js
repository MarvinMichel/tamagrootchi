const infoReducer = (state = false, action) => {
  switch (action.type) {
    case 'TRIGGER':
      return !state;
    default:
      return state;
  }
};

export default infoReducer;
