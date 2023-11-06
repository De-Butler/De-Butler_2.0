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
    <div className="w-full h-32 sm:h-28 bg-black  flex  sm:justify-between items-center border-t-2 border-white justify-center sm:px-20">
      <div className="sm:flex flex-col text-center text-white gap-2 hidden">
        <div className="text-sm  sm:text-2xl font-semibold">Contact Us</div>
        <span className="text-sm mt-2 ">debutler2023@gmail.com</span>
      </div>
      <div className="text-white flex flex-col sm:block ">
        <div className="text-xl font-bold  text-center sm:text-lg sm:text-center">De-Butler Community</div>

        <div className='flex sm:block'>
          {sns.map((snsItem, index) => (
            <a
              key={index}
              href={snsItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:inline-block gap-2 mt-4 hover:text-slate-500"
            >
              <snsItem.icon className='w-12 sm:w-24 h-6' />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
