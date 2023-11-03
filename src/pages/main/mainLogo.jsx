import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

export const MainLogo = () => {
  const [scope, animate] = useAnimate();

  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);

    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);

    setSize({
      columns,
      rows,
    });
  };

  const handleMouseLeave = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(255, 255, 255, 0)" }, { duration: 1.3 });
  };

  const handleMouseEnter = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(255, 255, 255, 1)" }, { duration: 0.15 });
  };

  return (
    <div className="bg-neutral-950 overflow-hidden">
      <div
        ref={scope}
        className="grid h-[600px] w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[1px] border-neutral-900"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8 mb-60">
        <h1 className="text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl">
          De-Butler
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl">
          Our Mission is to incubate many builders in the Web3
          <br />
          ecosystem through a variety of Web3 project environments.
        </p>
      </div>
    </div>
  );
};
