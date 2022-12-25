import { Icon } from '@iconify/react';

function Ridgular() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <div className="flex items-center w-full mb-4 px-8 sm:px-16">
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
        <h1 className="text-lg sm:text-4xl font-extrabold px-2">Ridgular</h1>
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
      </div>
      <div className="w-full sm:w-10/12 self-center flex justify-center">
        <img src="/images/ridgular.png" className="rounded-md object-scale-down object-center max-w-sm" />
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
          <p className="text-xs sm:text-base">Aug - Sep 2022 (4 weeks)</p>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">Ridgular is a progressive web app (PWA), developed as a project for the module CS3216 Software Product Engineering for Digital Markets.</p>
      <p className="text-left mb-4 text-sm sm:text-base">Built using React, Ridgular is a ride hailing platform for riders who have regular ride schedules, focusing on long term contracts between riders and drivers.</p>
    </div>
  )
}

export default Ridgular
