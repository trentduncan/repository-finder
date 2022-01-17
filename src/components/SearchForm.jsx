import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const languagesMap = {
  javascript: 'Javascript',
  ruby: 'Ruby',
  python: 'Python',
  css: 'CSS',
  html: 'HTML',
  shell: 'Shell',
  typescript: 'Typescript',
  java: 'Java',
  scala: 'Scala',
  rust: 'Rust'
};

function SearchForm({ isLoadingRepositories, onInteraction }) {
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

  return (
    <Paper
      component="form"
      elevation={4}
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        '@media (max-width: 750px)': {
          alignItems: 'center',
          flexDirection: 'column',
          width: '80%'
        },
        padding: '35px'
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        name="searchTerm"
        label="Search Value"
        sx={{
          width: '200px',
          marginRight: '30px',
          '@media (max-width: 750px)': {
            marginBottom: '30px',
            marginRight: '0 !important'
          }
        }}
        value={searchTermInput}
        onChange={handleChange}
      />
      <FormControl sx={{ marginRight: '0 !important' }}>
        <InputLabel>Language</InputLabel>
        <Select
          sx={{
            width: '200px',
            marginRight: '30px',
            '@media (max-width: 750px)': {
              marginBottom: '30px',
              marginRight: '0 !important'
            }
          }}
          name="language"
          value={languageInput}
          label="Language"
          onChange={handleChange}
        >
          {Object.entries(languagesMap).map(([key, value], i) => (
            <MenuItem key={i} value={key}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        disabled={searchTermInput === '' || isLoadingRepositories}
        sx={{ width: '200px', height: '56px' }}
        type="submit"
        variant="contained"
      >
        {isLoadingRepositories ? <CircularProgress /> : 'Search'}
      </Button>
    </Paper>
  );
}

SearchForm.INTERACTION_SUBMIT_BUTTON_CLICKED = `${SearchForm.name}.INTERACTION_SUBMIT_BUTTON_CLICKED`;

export default SearchForm;
