import React from 'react';

function useViewportWidth () {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () =>  setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, 1000)




  return { width }
}

export default useViewportWidth;
