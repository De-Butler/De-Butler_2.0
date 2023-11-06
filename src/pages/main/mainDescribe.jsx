import ecosystem from '../../assets/img/ecosystem.png';
import lecture from '../../assets/img/lecture.png';
import rd from '../../assets/img/r&d.png';
export default function MainDescribe() {
  const describeFeatures = [
    {
      img: <img src={lecture} alt="LECTURE" className="sm:w-28 mx-auto" />,
      title: 'Education',
      description:
        'We offer a comprehensive education in blockchain, from the fundamentals to specialized knowledge in ZKP and DID.',
    },

    {
      img: <img src={rd} alt="R&D" className="w-28 mx-auto" />,
      title: 'R&D',
      description:
        'From research and development for mass adoption to those tailored for the blockchain ecosystem, we are leading the way in the world of Web 3',
    },
    {
      img: <img src={ecosystem} alt="ECOSYSTEM" className="w-28 mx-auto" />,
      title: 'Ecosystem',
      description:
        'We are building a robust and extensive blockchain ecosystem through collaborations with foundations and open sessions.',
    },
  ];
  return (
    <div className="w-full h-3/4 bg-white pt-10">
      <h className="text-[30px] sm:text-[60px] text-black font-bold flex justify-center">
        What De-Butler Does
      </h>

      <div className="flex-col gap-4 sm:gap-0 flex sm:flex-row justify-around max-w-5xl mx-auto mt-32 mb-20 ">
        {describeFeatures.map((feature, index) => (
          <div key={index} className="flex-col justify-center ">
            {feature.img}
            <h3 className="text-3xl font-semibold mt-10 text-center">{feature.title}</h3>
            <p className='w-full text-center text-sm sm:text-left sm:w-80 font-medium sm:text-base mt-6 px-10'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
