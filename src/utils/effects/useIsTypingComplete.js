import { useContext } from 'react';
import { StateContext } from '../state';

const useIsTypingComplete = () => {
  const [state, updateState] = useContext(StateContext);

  const updateIsTypingComplete = isTypingComplete =>
    updateState(prevState => ({ ...prevState, isTypingComplete }));

  return [state.isTypingComplete, updateIsTypingComplete];
};

export default useIsTypingComplete;
