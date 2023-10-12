import React, { useState, useEffect, Suspense } from 'react';

export function LazyLoadComponent({ delayTime, children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [delayTime]);

  return isLoaded ? (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  ) : null;
}

