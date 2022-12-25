import Card from "../components/Card"
import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"
import Cityos from "../content/Cityos"
import TA from "../content/TA"
import Rover from "../content/Rover"
import Climbjios from "../content/Climbjios"
import Ridgular from "../content/Ridgular"
import Seatseer from "../content/Seatseer"
import Carousel from "../components/Carousel"
import Modal from "../components/Modal"
import { useState } from "react"

function Work() {
  const [isSTEngModalOpen, setSTEngModalOpen] = useState(false);
  const [isClimbjiosModalOpen, setClimbjiosModalOpen] = useState(false);
  const [isTAModalOpen, setTAModalOpen] = useState(false);
  const [isRoverModalOpen, setRoverModalOpen] = useState(false);
  const [isRidgularModalOpen, setRidgularModalOpen] = useState(false);
  const [isSeatseerModalOpen, setSeatseerModalOpen] = useState(false);

  return (
    <Section noPadding sectionId={SectionId.Work}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center w-full mb-20 px-8 sm:px-16">
          <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
          <h1 className="text-4xl font-extrabold px-2">My Work</h1>
          <span className="bg-[#393434] h-1 w-4 rounded-sm grow" />
        </div>
        <Carousel
          slides={[
            <img src="/images/st-engineering.png" className="object-scale-down" />,
            <img src="/images/climbjios.png" className="object-scale-down" />,
            <img src="/images/source-academy.png" className="object-scale-down" />,
            <img src="/images/rover-team.jpg" className="object-scale-down" />,
            <img src="/images/ridgular.png" className="object-scale-down" />,
            <img src="/images/seatseer.png" className="object-scale-down" />,
          ]}
          largeCaptions={[
            {
              caption: "ST Engineering",
              subCaption: "My work on cityOS, a platform for facility management.",
              buttonText: "Find out more",
              onClick: () => setSTEngModalOpen(true)
            },
            {
              caption: "ClimbJios",
              subCaption: "An open source progressive web app for Singapore's climbing community.",
              buttonText: "Find out more",
              onClick: () => setClimbjiosModalOpen(true)
            },
            {
              caption: "Undergraduate Teaching Assistant",
              subCaption: "My experience teaching the CS1101S Programming Methodology module.",
              buttonText: "Find out more",
              onClick: () => setTAModalOpen(true)
            },
            {
              caption: "NUS Rover Team",
              subCaption: "My time as a member and a project manager of the NUS Rover Team.",
              buttonText: "Find out more",
              onClick: () => setRoverModalOpen(true)
            },
            {
              caption: "Ridgular",
              subCaption: "A progressive web app for ride hailing for those who have regular ride booking schedules.",
              buttonText: "Find out more",
              onClick: () => setRidgularModalOpen(true)
            },
            {
              caption: "SeatSeer",
              subCaption: "A mobile app for checking seat availability around NUS.",
              buttonText: "Find out more",
              onClick: () => setSeatseerModalOpen(true)
            },
          ]}
        />
        <Modal handleClose={() => setSTEngModalOpen(false)} show={isSTEngModalOpen}>
          <Cityos />
        </Modal>
        <Modal handleClose={() => setClimbjiosModalOpen(false)} show={isClimbjiosModalOpen}>
          <Climbjios />
        </Modal>
        <Modal handleClose={() => setTAModalOpen(false)} show={isTAModalOpen}>
          <TA />
        </Modal>
        <Modal handleClose={() => setRoverModalOpen(false)} show={isRoverModalOpen}>
          <Rover />
        </Modal>
        <Modal handleClose={() => setRidgularModalOpen(false)} show={isRidgularModalOpen}>
          <Ridgular />
        </Modal>
        <Modal handleClose={() => setSeatseerModalOpen(false)} show={isSeatseerModalOpen}>
          <Seatseer />
        </Modal>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
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
      </div> */}
    </Section>
  )
}

export default Work