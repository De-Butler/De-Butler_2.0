import Debutler_Big from '../assets/img/debutler-big.png';
export default function AboutPage() {
  return (
    <div className="h-full min-h-screen bg-neutral-950">
      <div className=" h-screen flex items-center justify-center pt-20">
        <img src={Debutler_Big} alt="Logo" />
        <div className="text-9xl font-bold text-white">
          Empower
          <br /> Your
          <br /> Blockchain
          <br />
          Onborading
        </div>
      </div>

      <div className="text-6xl text-white flex justify-center mt-10 ">
        Who We Are?
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="flex w-full h-full items-center">
          <div className="w-1/2 h-fit min-h-[400px] border border-l-black border-white"></div>
          <div className="w-1/2 h-fit min-h-[400px] border border-r-black  border-white"></div>
        </div>
        <div className="flex w-full h-full items-center">
          <div className="w-1/2 h-fit min-h-[400px]  border-l-black border-white"></div>
          <div className="w-1/2 h-fit min-h-[400px] border border-r-black border-white"></div>
        </div>
        <div className="flex w-full h-full items-center">
          <div className="w-1/2 h-fit min-h-[400px] border-l-black border border-white"></div>
          <div className="w-1/2 h-fit min-h-[400px] border border-r-black border-white"></div>
        </div>
      </div>

      <div className='w-full h-[700px] text-white font-bold flex flex-col items-center justify-center text-[100px]'>Join Us!
      <span className='text-4xl text-white'> 3기 모집예정</span></div>
    </div>
  );
}
