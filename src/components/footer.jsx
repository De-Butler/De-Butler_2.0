import { BsMedium, BsInstagram } from 'react-icons/bs';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { RiTwitterXFill } from 'react-icons/ri';
export default function Footer() {
  const sns = [
    { icon: RiTwitterXFill, link: 'https://twitter.com/DeButler_' },
    { icon: BsInstagram, link: 'https://www.instagram.com/de__butler/?hl=ko' },
    { icon: BsMedium, link: 'https://medium.com/de-butler' },
    { icon: PiTelegramLogoLight, link: 'https://t.me/DeButler' },
  ];
  return (
    <div className="w-full h-28 bg-black  flex justify-between items-center border-t-2 border-white px-20">
      <div className="flex flex-col text-center text-white gap-2">
        <div className=" text-2xl font-semibold">Contact Us</div>
        <span className="text-sm mt-2 ">debutler2023@gmail.com</span>
      </div>
      <div className="text-white">
        <div className="">De-Butler Community</div>
        {sns.map((snsItem, index) => (
          <a
            key={index}
            href={snsItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-2 gap-2 mt-4 hover:text-slate-500"
          >
            <snsItem.icon size="1.5em" />
          </a>
        ))}
      </div>
    </div>
  );
}
