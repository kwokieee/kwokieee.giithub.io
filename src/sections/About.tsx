import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"

function About() {
  return (
    <Section sectionId={SectionId.About}>
      <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold">About me</h1>
      <p className="pt-6 pb-4">
        I’m currently a penultimate year computer science undergraduate from the National University of Singapore.
      </p>
      <p className="pt-2 max-w-4xl">
        I believe that experience is the best teacher, and throughout my university life, I have been diving into anything and everything to discover what I love and dislike, as well as what I’m good and bad at, to help me grow as a person.
      </p>
      </div>
    </Section>
  )
}

export default About