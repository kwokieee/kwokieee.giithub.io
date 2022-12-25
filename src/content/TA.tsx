import { Icon } from '@iconify/react';

function TA() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <div className="flex items-center w-full mb-4 px-8 sm:px-16">
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
        <h1 className="text-lg sm:text-4xl font-extrabold px-2">Undergraduate Teaching Assistant</h1>
        <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
      </div>
      <div className="w-full sm:w-10/12 self-center">
        <img src="/images/source-academy.png" className="rounded-md object-scale-down object-center" />
      </div>
      <div className="py-4">
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:user" style={{ display: "inline-block" }} />
          </span>
          <p className="text-xs sm:text-base">Teaching Assistant</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="uil:calender" />
          </span>
          <p className="text-xs sm:text-base">Aug - Nov 2022 (4 months)</p>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">During the 1st semester of my 3rd year, I decided to try teaching CS1101S Programming Methodology, the introductory module for computer science undergraduates.</p>
      <p className="text-left mb-4 text-sm sm:text-base">The module is based off the textbook <a href="https://sicp.sourceacademy.org/" className="text-emerald-500" target="_blank">Structure and Interpretation of Computer Programs</a>, and teaches various important concepts of programming (recursion, loops, abstraction, lazy evaluation, etc.) using a variant of JavaScript called Source.</p>
      <p className="text-left mb-4 text-sm sm:text-base">Classes are limited to a maximum of 8 students, which allowed me to focus on catering to each of my students on a more personal level based on their needs and abilities. It was my first experience teaching a class, and I am grateful for the opportunity to have made a difference in my student's learning journey.</p>
    </div>
  )
}

export default TA
