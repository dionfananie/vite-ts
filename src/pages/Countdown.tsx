import { useCountdown } from '@/hooks/useCountdown';

const Countdown = () => {
  const { hours, minutes, seconds } = useCountdown(
    new Date('Aug 13, 2023 23:30:00').getTime()
  );
  console.log(seconds);

  return (
    <div className="w-screen min-h-screen bg-yellow-500 flex items-center justify-center px-5 py-5">
      <div className="text-yellow-100">
        <h1 className="text-3xl text-center mb-3 font-extralight">
          Ujian akan dimulai dalam
        </h1>
        <div className="text-6xl text-center flex w-full items-center justify-center">
          <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
            <div className="font-mono leading-none" x-text="hours">
              {hours}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Hours
            </div>
          </div>
          <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
            <div className="font-mono leading-none" x-text="minutes">
              {minutes}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Minutes
            </div>
          </div>
          <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
            <div className="font-mono leading-none" x-text="seconds">
              {seconds}
            </div>
            <div className="font-mono uppercase text-sm leading-none">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
