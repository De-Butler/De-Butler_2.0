import a1 from '../../assets/img/a1.png';
import a2 from '../../assets/img/a2.png';
import a3 from '../../assets/img/a3.png';
import a4 from '../../assets/img/a4.png';
import a5 from '../../assets/img/a5.png';
import a6 from '../../assets/img/a6.png';
import a7 from '../../assets/img/a7.png';
import a8 from '../../assets/img/a8.png';
import Logo from '../../assets/img/De-Butler-white.png';
import ActivityPic from './activityPic';

export default function ActivityMain() {
  // Create an array of image sources
  const activities = [
    { src: a1, class: 'w-48 h-48' },
    { src: a2, class: 'w-48 h-48' },
    { src: a3, class: 'w-48 h-48' },
    { src: a4, class: 'w-48 h-48' },
    { src: Logo, class: 'w-48 h-48' },
    { src: a5, class: 'w-48 h-48' },
    { src: a6, class: 'w-48 h-48' },
    { src: a7, class: 'w-48 h-48' },
    { src: a8, class: 'w-48 h-48' },
  ];

  return (
    <div className="w-full sm:min-h-screen bg-neutral-950 sm:flex sm:justify-center px-4 sm:px-0 sm:items-center sm:gap-20">
      <div className="text-white flex-col items-center justify-center ">
        <h1 className="text-7xl font-bold pt-24 sm:pt-0">
          Be Precursor <br />
          With De-Butler
        </h1>
        <p className="text-2xl mt-10">
          Explore and utilize everything from basic to
          <br /> advanced techniques!
        </p>
        <p className='mt-6 text-2xl'>
          We are supporting our members to become the <br />
          frontrunners in the world of Web 3!
        </p>
      </div>
      <div className="hidden sm:grid sm:grid-cols-3 sm:min-w-[700px]">
        {activities.map((activity, index) => (
          <img
            key={index}
            src={activity.src}
            alt={`activity-${index}`}
            className={`${activity.class} object-contain`}
          />
        ))}
      </div>
      <div className="sm:hidden mt-12">
        <ActivityPic />
      </div>
    </div>
  );
}
