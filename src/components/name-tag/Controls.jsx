import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({
  greeting,
  tagName,
  onNameChange,
  onGreetChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='greeting'>Greeting:</label>
      <input
        id='greeting'
        name='greeting'
        type='text'
        value={greeting}
        onChange={onGreetChange}
      />
      <label htmlFor='name'>Name:</label>
      <input
        id='name'
        name='name'
        type='text'
        value={tagName}
        onChange={onNameChange}
      />
      <button aria-label='button'>Submit</button>
    </form>
  );
}

Controls.propTypes = {
  greeting: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onGreetChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
