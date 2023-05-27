import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { autocompleteRequest } from '../redux/actions/searchActions';

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector(
    (state) => state.search.searchResults || []
  );

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  const handleInputChange = (e, value) => {
    setInputValue(value);
    if (value.trim() !== '') {
      dispatch(autocompleteRequest(value));
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={searchResults}
      getOptionLabel={(option) => option.description || ""}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter a location"
          margin="normal"
          variant="outlined"
        />
      )}
      inputValue={inputValue}
      onInputChange={handleInputChange}
    />
  );
};

export default AutocompleteInput;