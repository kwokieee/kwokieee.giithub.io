import Card from "../components/Card"
import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"
import Cityos from "../content/Cityos"

function Work() {
  return (
    <Section noPadding sectionId={SectionId.Work}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl my-10">Work</h1>
        <div className="grid grid-cols-1 gap-8">
          <Card header="cityOS" body="Large scale software for building and facility management at a city level." imagePath="/images/cityOS.jpg" imageDescription="cityOS">
            <Cityos />
          </Card>
          <Card header="Undergraduate Teaching Assistant" body="My teaching experience for the CS1101S Programming Methodology module for Year 1 Computing students." imagePath="/images/source-academy.png" imageDescription="Source Academy NUS">
            <p>Source content</p>
          </Card>
          <Card header="Integrated Waste Management Facility" body="Part of the Tuas Nexus to meet Singapore's long-term solid waste management & used water treatment needs." imagePath="/images/iwmf.jpg" imageDescription="IWMF">
            <p>IWMF content</p>
          </Card>
        </div>
      </div>
    </Section>
  )
}

export default Work