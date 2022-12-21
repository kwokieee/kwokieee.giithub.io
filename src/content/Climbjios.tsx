import { Icon } from '@iconify/react';

function Climbjios() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <div className="w-full sm:w-10/12 self-center">
        <img src="/images/climbjios.png" className="rounded-md object-scale-down object-center" />
      </div>
      <div className="py-4">
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:user" style={{ display: "inline-block" }} />
          </span>
          <p>Co-founder</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="uil:calender" />
          </span>
          <p>Sep 2022 - Present</p>
        </span>
        <span className="flex">
          <span className="mr-2 flex items-center">
            <Icon icon="mdi:link-variant" />
          </span>
          <a href="https://www.climbjios.com" className="text-emerald-500" target="_blank">climbjios.com</a>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">ClimbJios started as the final project for a module I was taking, CS3216 Software Product Engineering for Digital Markets. Built for the Singaporean climbing community in the short span of 6 weeks, we managed to get more than 643 sign-ups and more than 200 posts made on our app in less than a week of public release.</p>
      <p className="text-left mb-4 text-sm sm:text-base">I was in charge of frontend development, as well as marketing efforts like designing posters for advertising our product.</p>
      <div className="w-full sm:w-10/12 self-center">
        <img src="/images/climbjios-steps-poster.png" className="rounded-md object-scale-down object-center" />
      </div>
      <p className="text-left my-4 text-sm sm:text-base">At the end of the module, each team gets to showcase our product at the SoC Term Project Showcase (STePS) event, which is open to the public. Our team managed to obtain the best project award!</p>
      <div className="w-full sm:w-10/12 self-center">
        <img src="/images/climbjios-steps-prize.jpg" className="rounded-md object-scale-down object-center" />
      </div>
      <p className="text-left my-4 text-sm sm:text-base">ClimbJios is now an open source project. Check out our repository <a href="https://github.com/climbjios-sg/climbjios-app" className="text-emerald-500" target="_blank">here</a>!</p>
    </div>
  )
}

export default Climbjios
