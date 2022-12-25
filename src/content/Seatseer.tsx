import { Icon } from '@iconify/react';

function Seatseer() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <div className="flex items-center w-full mb-4 px-8 sm:px-16">
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
        <h1 className="text-lg sm:text-4xl font-extrabold px-2">SeatSeer</h1>
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
      </div>
      <div className="w-full sm:w-10/12 self-center flex justify-center">
        <img src="/images/seatseer.png" className="object-scale-down object-center" />
      </div>
      <div className="py-4">
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:user" style={{ display: "inline-block" }} />
          </span>
          <p className="text-xs sm:text-base">Frontend Developer</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="uil:calender" />
          </span>
          <p className="text-xs sm:text-base">May - Aug 2021 (3 months)</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:link-variant" />
          </span>
          <a href="https://github.com/SeatSeer/seatseer" className="text-emerald-500 text-xs sm:text-base" target="_blank">https://github.com/SeatSeer/seatseer</a>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">SeatSeer is a mobile application for finding available seats in NUS, developed as a project for the module CP2106 Independent Software Development Project, better known as Orbital.</p>
      <p className="text-left mb-4 text-sm sm:text-base">This was my first software development project, and was built using React Native.</p>
    </div>
  )
}

export default Seatseer
