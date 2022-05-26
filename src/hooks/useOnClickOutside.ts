import { useEffect, RefObject } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event) => void
) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useOnClickOutside;
