import Card from "../components/Card"
import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"
import Cityos from "../content/Cityos"
import TA from "../content/TA"
import Rover from "../content/Rover"
import Climbjios from "../content/Climbjios"
import Ridgular from "../content/Ridgular"
import Seatseer from "../content/Seatseer"

function Work() {
  return (
    <Section sectionId={SectionId.Work}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center w-full mb-16">
          <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
          <h1 className="text-4xl font-extrabold px-2">My Work</h1>
          <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
        </div>
        <div className="grid grid-cols-1 gap-8">
          <Card header="cityOS" body="Large scale software for building and facility management at a city level." imagePath="/images/cityOS.jpg" imageDescription="cityOS">
            <Cityos />
          </Card>
          <Card header="Undergraduate Teaching Assistant" body="My teaching experience for the CS1101S Programming Methodology module for Year 1 Computing students." imagePath="/images/source-academy.png" imageDescription="Source Academy NUS">
            <TA />
          </Card>
          <Card header="NUS Rover Team" body="My time as a member and a project manager of the NUS Rover Team." imagePath="/images/rover-team.jpg" imageDescription="NUS Rover Team">
            <Rover />
          </Card>
          <Card header="ClimbJios" body="An open source progressive web app for Singapore’s climbing community." imagePath="/images/climbjios.png" imageDescription="ClimbJios">
            <Climbjios />
          </Card>
          <Card header="Ridgular" body="A progressive web app for ride hailing for those who have regular ride booking schedules." imagePath="/images/ridgular.png" imageDescription="Ridgular">
            <Ridgular />
          </Card>
          <Card header="SeatSeer" body="A mobile app for checking seat availability for different areas around NUS." imagePath="/images/seatseer.png" imageDescription="SeatSeer">
            <Seatseer />
          </Card>
        </div>
      </div>
    </Section>
  )
}

export default Work