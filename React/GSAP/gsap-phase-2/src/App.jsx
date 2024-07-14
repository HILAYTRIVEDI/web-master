import React, { useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () =>
{
  const circleRef = useRef(null);
  const [count, setCount] = useState(0);

  // Use context safe to do memory management
  const { contextSafe } = useGSAP();

  const rotate = contextSafe(() =>
  {
    setCount((prevCount) => gsap.utils.random(100, 500, 10));
    gsap.to(circleRef.current, {
      rotation: 360,
      x: count,
    });
  });

  return (
    <main>
      <button onClick={rotate} className="animination-btn">
        Animate
      </button>
      <div ref={circleRef} id="circle"></div>
    </main>
  );
};

export default App;