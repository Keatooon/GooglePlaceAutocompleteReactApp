export const autocompleteRequest = (inputValue) => {
    return {
      type: 'AUTOCOMPLETE_REQUEST',
      payload: inputValue,
    };
  };
  
  export const updateSearchResult = (results) => {
    // console.log('wk in updateSearchResult' + JSON.stringify(results));
    return {
      type: 'UPDATE_SEARCH_RESULT',
      payload: results,
    };
  };
  
  export const searchError = (error) => {
    return {
      type: 'SEARCH_ERROR',
      payload: error,
    };
  };
  