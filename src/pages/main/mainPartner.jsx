import React, { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
import { Link } from 'react-router-dom';
import YourD from '../../assets/img/yourd.png';
import Near from '../../assets/img/near.png';
import swf from '../../assets/img/swf.png';
import Meta from '../../assets/img/SeoulMetaweek.png';
import Chain3 from '../../assets/img/chain3.png';
import Klaytn from '../../assets/img/klaytn.png';
import Tezos from '../../assets/img/tezos.png';
import LBank from '../../assets/img/lbank.png';
import XRP from '../../assets/img/xrp.png';
export const MainPartner = () => {
  const [scope, animate] = useAnimate();

  const [size, setSize] = useState({ columns: 0, rows: 0 });

  const partners = [
    { name: 'YourD', link: 'https://www.yourd.xyz/', image: YourD, width: 'w-24' },
    { name: 'Near', link: 'https://nearkorea.org/', image: Near, width: 'w-36' },
    { name: 'SWF', link: '', image: swf, width: 'w-36' },
    { name: 'MetaWeek', link: 'https://seoulmetaweek.com/ko/', image: Meta, width: 'w-36' },
    { name: 'Chain3', link: 'https://chain.partners/history-korean/', image: Chain3, width: 'w-36' },
  ];
  const cooperations = [
    {name:'Klaytn', link:'https://klaytn.foundation/',image:Klaytn,width:'w-60'},
    {name:'Tezos', link:'https://tezos.com/',image:Tezos,width:'w-48'},
    {name:'LBank', link:'https://www.lbank.com/ko-KR/',image:LBank,width:'w-40'},
    {name:'XRP', link:'https://xrpl.org/', image:XRP, width:'w-40'},
  ]

  useEffect(() => {
    generateGridCount();
    window.addEventListener('resize', generateGridCount);

    return () => window.removeEventListener('resize', generateGridCount);
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
    animate(id, { background: 'rgba(255, 255, 255, 0)' }, { duration: 1.2 });
  };

  const handleMouseEnter = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: 'rgba(255, 255, 255, 1)' }, { duration: 0.15 });
  };

  return (
    <div className="relative bg-neutral-950 overflow-hidden">
      <div
        ref={scope}
        className="grid  w-full h-[600px] grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
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
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col  p-8 gap-8">
        <h1 className="text-center text-5xl font-semibold uppercase text-white">
          Partner
        </h1>
       <div className='flex items-center justify-around relative pointer-events-auto mt-4 mx-4'>
          {partners.map((partner) => (
            <Link key={partner.name} to={partner.link} target="_blank">
              <img src={partner.image} alt={partner.name} className={partner.width} />
            </Link>
          ))}
        </div>
        <h2 className="text-center text-5xl font-semibold mt-10 text-white">
          Cooperation
        </h2>
        <div className='flex items-center justify-around relative pointer-events-auto'>
          {cooperations.map((cooperation) => (
            <Link key={cooperation.name} to={cooperation.link} target="_blank">
              <img src={cooperation.image} alt={cooperation.name} className={cooperation.width} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
