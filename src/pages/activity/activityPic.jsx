import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import a1 from '../../assets/img/a1.png';
import a2 from '../../assets/img/a2.png';
import a3 from '../../assets/img/a3.png';
import a4 from '../../assets/img/a4.png';
import a5 from '../../assets/img/a5.png';
import a6 from '../../assets/img/a6.png';
import a7 from '../../assets/img/a7.png';
import a8 from '../../assets/img/a8.png';

const ActivityPic = () => {
  return (
    <>
      <HorizontalScrollCarousel />
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[250px] w-[250px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
     
    </div>
  );
};

export default ActivityPic;

const cards = [
  {
    url: a1,
    id: 1,
  },
  {
    url: a2,
    id: 2,
  },
  {
    url: a3,
    id: 3,
  },
  {
    url: a4,
    id: 4,
  },
  {
    url: a5,
    id: 5,
  },
  {
    url: a6,
    id: 6,
  },
  {
    url: a7,
    id: 7,
  },
  {
    url: a8,
    id: 8,
  },
];
