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

  return (
    <form
      style={{ backgroundColor: 'white', width: '500px', padding: '25px' }}
      onSubmit={handleSubmit}
    >
      <label>Search Parameter</label>
      <input
        name="searchTerm"
        type="text"
        value={searchTermInput}
        onChange={handleChange}
      />
      <select name="language" onChange={handleChange}>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
      </select>
      <button></button>
    </form>
  );
}

SearchForm.INTERACTION_SUBMIT_BUTTON_CLICKED = `${SearchForm.name}.INTERACTION_SUBMIT_BUTTON_CLICKED`;

export default SearchForm;
