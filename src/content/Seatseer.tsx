import { Icon } from '@iconify/react';

function Seatseer() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <div className="w-full sm:w-10/12 self-center flex justify-center">
        <img src="/images/seatseer.png" className="rounded-md object-scale-down object-center" />
      </div>
      <div className="py-4">
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:user" style={{ display: "inline-block" }} />
          </span>
          <p>Frontend Developer</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="uil:calender" />
          </span>
          <p>May - Aug 2021 (3 months)</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:link-variant" />
          </span>
          <a href="https://github.com/SeatSeer/seatseer" className="text-emerald-500" target="_blank">https://github.com/SeatSeer/seatseer</a>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">SeatSeer is a mobile application for finding available seats in NUS, developed as a project for the module CP2106 Independent Software Development Project, better known as Orbital.</p>
      <p className="text-left mb-4 text-sm sm:text-base">This was my first software development project, and was built using React Native. I was the frontend developer helped design the logo for the app.</p>
    </div>
  )
}

export default Seatseer
