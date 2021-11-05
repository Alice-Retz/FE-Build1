import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ newName, newGreeting }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'indigo',
        color: 'white',
        borderRadius: '10px',
        margin: '20px',
        padding: '40px',
      }}
    >
      <h1>{newGreeting},</h1>
      <h1>my name is</h1>
      <h1>{newName}</h1>
    </div>
  );
}

Display.propTypes = {
  newName: PropTypes.string.isRequired,
  newGreeting: PropTypes.string.isRequired,
};
