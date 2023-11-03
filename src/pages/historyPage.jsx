import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import Tron from '../assets/img/tron.png';
import KlayMakers from '../assets/img/klaytnMakers.png';
import Polkdot from '../assets/img/polkadot.png';
import EthSeoul from '../assets/img/eth_seoul.png';
import Evmos from '../assets/img/evmos.png';
const images = [
  Tron,
  KlayMakers,
  Polkdot,
  EthSeoul,
  Evmos
];

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ src, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={src} alt={title} />
      </div>
      <motion.h2 style={{ y }}>{title}</motion.h2>
    </section>
  );
}

export default function HistoryPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {images.map((src, index) => (
        <Image key={src} src={src} title={`#00${index + 1}`} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
