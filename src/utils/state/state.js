import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  isTypingComplete: false,
  path: '/',
};

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, updateState] = useState(initialState);

  return (
    <StateContext.Provider value={[state, updateState]}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StateContext, StateProvider };
