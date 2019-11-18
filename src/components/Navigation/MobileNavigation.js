import React from 'react';
import { hidden } from './MobileNavigation.css';

import useIsTypingComplete from '../../utils/effects/useIsTypingComplete';
import usePath from '../../utils/effects/usePath';

const pages = ['about', 'resume', 'projects'];

const MobileNavigation = () => {
  const [isTypingComplete] = useIsTypingComplete();
  const [path, updatePath] = usePath();

  const onSelectChange = event => {
    updatePath(event.target.value);
  };
  return (
    <nav>
      <select
        onBlur={null}
        onChange={onSelectChange}
        className={isTypingComplete ? null : hidden}
        required
      >
        <option value="">select page</option>
        {pages.map(page => (
          <option key={page} selected={path === page ? 'selected' : null}>
            {page}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default MobileNavigation;
