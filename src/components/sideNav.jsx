import { useState } from 'react';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center text-white ">
        <motion.button
          whileHover={{ rotate: '180deg' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-[20px]  text-white hover:text-indigo-500 transition-colors p-4 "
        >
          <FiMenu />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <motion.nav
      className="fixed top-0 bottom-0 w-[100vw] right-0 bg-white z-50"
      animate={isOpen ? 'open' : 'closed'}
      variants={navVariants}
      initial="closed"
    >
      <motion.button
        className="text-3xl bg-white text-black hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
        whileHover={{ rotate: '180deg' }}
        onClick={() => setIsOpen(false)}
        whileTap={{ scale: 0.9 }}
      >
        <FiX />
      </motion.button>
      <motion.div
        variants={linkWrapperVariants}
        className="flex flex-col gap-4 absolute bottom-8 left-8"
      >
        <NavLink text="Home" />
        <NavLink text="About" />
        <NavLink text=" Activity" />
        <NavLink text="Contact" />
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ text }) => {
  return (
    <motion.a
      className="inline-block z-10 text-slate-800 w-fit font-black text-7xl hover:text-indigo-500 transition-colors"
      variants={navLinkVariants}
      transition={{
        type: 'spring',
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: '-7.5deg',
      }}
      rel="nofollow"
      href="#"
    >
      {text}
    </motion.a>
  );
};

export default SideNav;

const navVariants = {
  open: {
    x: '0%',
    borderTopLeftRadius: '0vw',
    borderBottomLeftRadius: '0vw',
    opacity: 1,
  },
  closed: {
    x: '100%',
    borderTopLeftRadius: '50vw',
    borderBottomLeftRadius: '50vw',
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};
