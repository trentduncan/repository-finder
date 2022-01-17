import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

function SearchForm({ onInteraction }) {
  const initialState = { searchTermInput: '', languageInput: 'javascript' };

  const [state, setState] = useState(initialState);

  function handleChange(event) {
    const { name, value } = event.target;
    setState(currentState => ({ ...currentState, [`${name}Input`]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onInteraction({
      type: SearchForm.INTERACTION_SUBMIT_BUTTON_CLICKED,
      searchTerm: searchTermInput,
      language: languageInput
    });
  }

  const { searchTermInput, languageInput } = state;

  const matches = useMediaQuery('(min-width:730px)', { noSsr: true });
  console.log(matches);
  return (
    <Paper
      component="form"
      elevation={4}
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        // flexDirection: 'column',
        padding: '35px'
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-name"
        name="searchTerm"
        label="Search Value"
        sx={{ marginRight: '30px', width: '200px' }}
        value={searchTermInput}
        onChange={handleChange}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ marginRight: '30px', width: '200px' }}
          name="language"
          value={languageInput}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="javascript">Javascript</MenuItem>
          <MenuItem value="python">Python</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{ width: '200px' }} type="submit" variant="contained">
        Search
      </Button>
    </Paper>
  );
}

SearchForm.INTERACTION_SUBMIT_BUTTON_CLICKED = `${SearchForm.name}.INTERACTION_SUBMIT_BUTTON_CLICKED`;

export default SearchForm;
