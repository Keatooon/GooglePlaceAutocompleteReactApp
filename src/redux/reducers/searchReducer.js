const initialState = {
    searchResults: [],
    error: null,
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SEARCH_RESULT':
        return {
          ...state,
          searchResults: action.payload,
          error: null,
        };
      case 'SEARCH_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;