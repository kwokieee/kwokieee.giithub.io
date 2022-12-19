import Card from "../components/Card"
import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"

function Projects() {
  return (
    <Section noPadding sectionId={SectionId.Projects}>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl my-10">Projects</h1>
      <div className="grid grid-cols-1 gap-8">
        <Card header="ClimbJios" body="An open source progressive web app for Singapore’s climbing community." imagePath="/images/climbjios.png" imageDescription="ClimbJios">
          <p>ClimbJios Content</p>
        </Card>
        <Card header="Ridgular" body="A progressive web app for ride hailing for those who have regular ride booking schedules." imagePath="/images/ridgular.png" imageDescription="Ridgular">
          <p>Ridgular Content</p>
        </Card>
        <Card header="SeatSeer" body="A mobile app for checking seat availability for different areas around NUS." imagePath="/images/seatseer.png" imageDescription="SeatSeer">
          <p>SeatSeer Content</p>
        </Card>
      </div>
    </div>
    </Section>
  )
}

export default Projects