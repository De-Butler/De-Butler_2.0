import ecosystem from '../../assets/img/ecosystem.png';
import lecture from '../../assets/img/lecture.png';
import rd from '../../assets/img/r&d.png';
export default function MainDescribe() {
  const describeFeatures = [
    {
      img: <img src={lecture} alt="LECTURE" className="w-24 mx-auto" />,
      title: 'Education',
      description:
        '블록체인 기초부터 ZKP, DID 등의 전문적인 교육까지 포괄적인 교육과 지속적인 학습을 지원합니다.',
    },

    {
      img: <img src={rd} alt="R&D" className="w-24 mx-auto" />,
      title: 'R&D',
      description:
        'Mass Adoption을 위한 리서치부터 블록체인 생태계를 위한 기술 리서치까지, De-Butler는 사용자 중심의 혁신과 보안 강화에 집중한 개발을 목표로 합니다',
    },
    {
      img: <img src={ecosystem} alt="ECOSYSTEM" className="w-24 mx-auto" />,
      title: 'Ecosystem',
      description:
        'De-Butler 학회는 여러 재단과의 협업, 대중들을 위한 오픈 세션을 통해 광범위한 Ecosystem 구축하여 강력하고 지속 가능한 블록체인 생태계를 조성하고 있습니다',
    },
  ];
  return (
    <div className="w-full h-3/4 bg-white pt-10">
      <h className="text-[60px] text-black font-bold flex justify-center">
        What De-Butler Does
      </h>

      <div className="flex justify-around max-w-5xl mx-auto mt-32 mb-20">
        {describeFeatures.map((feature, index) => (
          <div key={index} className="flex-col justify-center ">
            {feature.img}
            <h3 className="text-3xl font-semibold mt-10 text-center">{feature.title}</h3>
            <p className='w-60 font-medium mt-6'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
