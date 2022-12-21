import { Icon } from '@iconify/react';

function IWMF() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <p className="text-3xl self-center mb-4">Integrated Waste Management Facility</p>
      <div className="w-full sm:w-10/12 self-center">
        <img src="/images/iwmf.jpg" className="rounded-md object-scale-down object-center" />
      </div>
      <div className="py-4">
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:user" style={{ display: "inline-block" }} />
          </span>
          <p>Intern</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="uil:calender" />
          </span>
          <p>Jun - Aug 2021 (2 months)</p>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">In the summer of 2021, I took up an internship at ST Engineering under the Environmental Engineering Services department to assist in the Integrated Waste Management Facility, which aims to process waste and recover energy.</p>
      <p className="text-left mb-4 text-sm sm:text-base">I was in charge of drafting a Functional Description for programmers specialized in SCADA programming.</p>
      <p className="text-left mb-4 text-sm sm:text-base">Although the job was mostly unrelated to what I was studying, I wanted to try out something new and see what other paths I could explore. And while the things I learnt might not be applicable to what I choose to do in the future, I still gained a deeper insight into what the Marine sector was like.</p>
    </div>
  )
}

export default IWMF
