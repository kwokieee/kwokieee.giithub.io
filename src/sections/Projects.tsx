import Card from "../components/Card"

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-10">Projects</h1>
      <div className="grid grid-cols-1 gap-8">
        <Card header="ClimbJios" body="An open source progressive web app for Singapore’s climbing community." imagePath="/images/climbjios.png" imageDescription="ClimbJios" />
        <Card header="Ridgular" body="A progressive web app for ride hailing for those who have regular ride booking schedules." imagePath="/images/ridgular.png" imageDescription="Ridgular" />
        <Card header="SeatSeer" body="A mobile app for checking seat availability for different areas around NUS." imagePath="/images/seatseer.png" imageDescription="SeatSeer" />
      </div>
    </div>
  )
}

export default Projects