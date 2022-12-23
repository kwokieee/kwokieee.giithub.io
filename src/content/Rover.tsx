import { Icon } from '@iconify/react';

function Rover() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <p className="text-3xl self-center mb-4 font-extrabold">NUS Rover Team</p>
      <div className="w-full sm:w-10/12 self-center flex justify-center">
        <img src="/images/rover-team.jpg" className="rounded-md object-scale-down object-center max-w-sm" />
      </div>
      <div className="py-4">
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:user" style={{ display: "inline-block" }} />
          </span>
          <p>Project Manager</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="uil:calender" />
          </span>
          <p>Sep 2020 - Apr 2022 (1.5 yrs)</p>
        </span>
      </div>
      <p className="text-left text-sm sm:text-base">During my first 2 years of university, I decided to join the NUS Students for the Exploration and Development of Space (SEDS), as a member of the Rover Team. Ever since I was a kid, I thought that space was pretty cool, so I thought: why not try something related to it?</p>
      <div className="relative overflow-hidden h-[240px] sm:h-[720px] w-full sm:w-10/12 my-6 self-center">
        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/HAAx4oThg6U" title="NUS Rover Team" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <p className="text-left text-sm sm:text-base">The Rover Team's goal is to, well, build a rover for exploring planets. The team is split into 7 sub-teams, namely Chassis, Mobility, Robotic Arm, Science, Communications, Navigation, and Electrical. I was initially part of the Communications sub-team, which was in charge of building the communication system between the rover and the base station.</p>
      <div className="relative overflow-hidden h-[240px] sm:h-[720px] w-full sm:w-10/12 my-6 self-center">
        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/JHml_IYz7yc" title="NUS Rover Team URC SAR 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">In my final few months, I was chosen to lead the team by my then project manager. Through this, I got the opportunity to lead an interdisciplinary team of 30 students to participate in the University Rover Challenge 2022. While the team did not make it to the finals held at the Mars Desert Research Station in Utah, I am grateful for the lessons learnt.</p>
    </div>
  )
}

export default Rover

