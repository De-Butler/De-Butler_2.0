import React, { useEffect, useState } from 'react';
import Polkdot from '../../assets/img/polkadot.png';
import EthSeoul from '../../assets/img/eth_seoul.png';
import KlayMakers from '../../assets/img/klaytnMakers.png';
import Evmos from '../../assets/img/evmos.png';
import Tron from '../../assets/img/tron.png';
import { motion, useTransform, useScroll } from 'framer-motion';
import { FiArrowUpRight } from "react-icons/fi";


const Hackathon = () => {
  return(
    <section className="p-8 bg-neutral-950 min-h-screen">
      <span className="block text-center text-5xl font-medium mb-24 mt-10 text-white ">
      Hackathon Awards
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <Card
          title="Polkadot"
          description="NFT dApps Staking Micro-Rewards"
          description2='Project : PSP34 NFT minting'
          imgSrc={Polkdot}
          Link="https://devpost.com/software/comit"
        />
        <Card
          title="ETH Seoul"
          description="IPFS/File coin"
          description2='Project : Soul Tag'
          imgSrc={EthSeoul}
          Link="https://devfolio.co/projects/soul-tag-f317"
        />
        <Card
          title="Klaytn Makers"
          description="Klaymaker 22 - Public Goods Track "
          description2='FinalList & Winner'
          imgSrc={KlayMakers}
          Link = 'https://dorahacks.io/buidl/3623'
        />
        <Card
          title="Evmos"
          description="Evmos-Covalent #OneMillionWallets Hackathon - NFT, GameFi Top Prize 1st"
          description2='Project : Metaverse (Roblox)'
          imgSrc={Evmos}
          Link ='https://www.blog.encode.club/evmos-covalent-onemillionwallets-hackathon-prizewinners-and-summary-22fca2302c37'
        />
        <Card
          title="Tron"
          description="TRON Grand Hackathon : Season 3 - GameFi TRON DAO Forum: GameFi Prizes"
          description2='Project : Mushroom'
          imgSrc={Tron}
          Link = 'https://forum.trondao.org/t/mushroom-a-nurturing-simulation-game-with-tron/11296'
        />
      </div>
      
    </section>
  
  );
};

const Card = ({ imgSrc, title, description, description2, Link }) => {
  return (
    <motion.div whileHover="hover" className="w-full h-[300px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-xl mb-2 font-semibold text-white">{title}</h3>
        <p className="text-sm font-light text-slate-300">{description}</p>
        <p className='text-sm font-light text-slate-300'>{description2}</p>
      </div>
      <motion.div
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
       <a
        href={Link} // 여기에 링크를 설정합니다.
        target="_blank" // 링크를 새 탭에서 열도록 설정합니다.
        rel="noopener noreferrer" // 보안을 위해 noreferrer를 설정합니다.
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-indigo-500 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-xs">MORE</span>
          <FiArrowUpRight className="text-lg" />
        </div>
      </a>
    </motion.div>
  );
};


export default Hackathon;