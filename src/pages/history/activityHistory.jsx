import { useAnimate } from 'framer-motion';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ac1 from '../../assets/img/activity1.jpeg';
import ac2 from '../../assets/img/activity2.jpeg';
import ac3 from '../../assets/img/activity3.jpeg';
import ac4 from '../../assets/img/activity4.jpeg';
import ac5 from '../../assets/img/activity5.jpeg';
import ac6 from '../../assets/img/activity6.jpeg';
import ac7 from '../../assets/img/activity7.jpeg';
import ac8 from '../../assets/img/activity8.jpeg';
import ac9 from '../../assets/img/activity9.jpeg';
import ac10 from '../../assets/img/activity10.jpg';
import ac11 from '../../assets/img/activity11.jpg';
import ac12 from '../../assets/img/activity12.jpeg';
import ac13 from '../../assets/img/activity13.jpeg';
import ac14 from '../../assets/img/activity14.png';
import ac15 from '../../assets/img/activity15.jpg';
import ac16 from '../../assets/img/activity16.png';
export const ActivityHistory = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        ac1,
        ac2,
        ac3,
        ac4,
        ac5,
        ac6,
        ac7,
        ac8,
        ac9,
        ac10,
        ac11,
        ac12,
        ac13,
        ac14,
        ac15,
        ac16,
      ]}
    >
      <section className="h-screen bg-neutral-950">
       
        <Copy />
        <WatermarkWrapper />
      </section>
    </MouseImageTrail>
  );
};

const Copy = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999999]">
      <div className="mx-auto flex max-w-7xl items-end justify-between p-4 md:p-8">
        <div>
          <h1 className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-slate-700 md:text-8xl">
            Debutler <span className="text-slate-200">Plates</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
    </>
  );
};

const Watermark = ({ reverse, text }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-white">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-white">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: 'spring', damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: 'linear', duration: 0.5, delay: 1 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-60 w-auto rounded-xl border-2 border-slate-900 bg-slate-800 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
