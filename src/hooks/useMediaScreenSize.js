import { useState, useLayoutEffect } from 'react';

const getWidth = () => {
  return document.documentElement.clientWidth;
};

function useMediaScreenSize() {
  const [size, setSize] = useState({
    width: getWidth(),
  });

  useLayoutEffect(() => {

    let timeOutId = null;

    const handleResize = () => {
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        setSize({
          width: getWidth(),
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return size;
}

export default useMediaScreenSize;
