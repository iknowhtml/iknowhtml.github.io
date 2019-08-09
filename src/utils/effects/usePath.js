import { useContext } from 'react';
import { StateContext } from '../state';

const usePath = () => {
  const [state, updateState] = useContext(StateContext);

  const updatePath = path => updateState(prevState => ({ ...prevState, path }));

  return [state.path, updatePath];
};

export default usePath;