import Card from "../components/Card"

function Work() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-10">Work</h1>
      <div className="grid grid-cols-1 gap-8">
        <Card header="cityOS" body="Large scale software for building and facility management at a city level." imagePath="/images/cityOS.jpg" imageDescription="cityOS" />
        <Card header="Undergraduate Teaching Assistant" body="My teaching experience for the CS1101S Programming Methodology module for Year 1 Computing students." imagePath="/images/source-academy.png" imageDescription="Source Academy NUS" />
        <Card header="Integrated Waste Management Facility" body="Part of the Tuas Nexus to meet Singapore's long-term solid waste management & used water treatment needs." imagePath="/images/iwmf.jpg" imageDescription="IWMF" />
      </div>
    </div>
  )
}

export default Work