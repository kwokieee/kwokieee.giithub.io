import Airbitat from "../components/models/processed/Airbitat";
import EVCharger from "../components/models/processed/EVCharger";
import SchindlerLift from "../components/models/processed/SchindlerLift";
import STEngAMK from "../components/models/processed/STEngAMK";
import STEngJE from "../components/models/processed/STEngJE";
import { Icon } from '@iconify/react';
import Carousel from "../components/Carousel";

function Cityos() {
  return (
    <div className="flex flex-col justify-center items-start py-4 px-8">
      <p className="text-3xl self-center mb-4 font-extrabold">cityOS</p>
      <div className="w-full sm:w-10/12 self-center">
        <img src="/images/cityOS.jpg" className="rounded-md object-scale-down object-center" />
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
          <p>Jan - Jul 2022 (7 months)</p>
        </span>
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">In the first half of 2022, I had the opportunity to work with ST Engineering under the Digital Facilities Solutions department, which was in charge of developing the AGIL Smart City Operating System, or cityOS for short.</p>
      <p className="text-left text-sm sm:text-base">cityOS is a platform for integrating and managing key assets of buildings, estates, and cities as a whole to enhance efficiency and save costs. This was my first real software development internship, and I was given the opportunity to try my hand at many tasks related to infrastructure, DevOps, 3D modelling, and full stack development.</p>
      <div className="relative overflow-hidden h-[240px] sm:h-[720px] w-full sm:w-10/12 my-6 self-center">
        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/J7uF4DWtZ-U" frameBorder="0" title="AGIL® Smart City Operating System" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">In the infrastructure/DevOps team, I created an automated help desk to provide a smoother onboarding process for new employees and administrators, and assisted in deploying Keycloak as part of the department's cloud migration efforts.</p>
      <p className="text-left mb-4 text-sm sm:text-base">I was also tasked with using 3D modelling software like Blender to create a to-scale model of some of the company's office buildings, as well as model certain assets to be monitored by the cityOS application (e.g. Elevators, EV chargers, smart air-cooling units).</p>
      <div className="w-full sm:w-10/12 h-[300px] sm:h-[500px] self-center mb-4">
        {/* <Carousel slides={[<Airbitat />, <EVCharger />, <SchindlerLift />, <STEngAMK />, <STEngJE />]} slideClasses="bg-slate-100" /> */}
        <Carousel
          slides={[
            <Airbitat />,
            <EVCharger />,
            <SchindlerLift />,
            <STEngAMK />,
            <STEngJE />
          ]}
          smallCaptions={[
            { caption: "A smart air-cooling unit" },
            { caption: "An electric vehicle charger" },
            { caption: "An elevator" },
            { caption: "To-scale model of ST Engineering office buildings" },
            { caption: "To-scale model of ST Engineering office buildings" },
          ]}
          slideClasses="bg-slate-100"
        />
      </div>
      <p className="text-left mb-4 text-sm sm:text-base">In addition, I also assisted the development team in bug fixes, data preparation, as well as developing the "Preventive Maintenance" feature with a group of overseas developers from China.</p>
      <p className="text-left mb-4 text-sm sm:text-base">The work was tough, but it was my first taste of developing a real world product, and I was blessed to have such friendly and patient teammates to guide me through my journey.</p>
    </div>
  )
}

export default Cityos
