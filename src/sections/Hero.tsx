import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"

function Hero() {
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative">
        <img src="/images/hero-photo.png" className="object-cover lg:w-screen lg:h-screen" />
        <div className="bg-[#393434] rounded-md absolute right-4 sm:right-[16%] lg:right-[16%] top-1/4 py-2 px-4 lg:py-8 lg:px-16 flex flex-col items-center">
          <p className="text-[#eeeeee] text-3xl sm:text-4xl lg:text-6xl font-extrabold">Hi, I'm Bryan.</p>
          <div className="bg-[#eeeeee] h-0.5 w-5/6 my-1 sm:my-2 lg:my-6 rounded-sm" />
          <p className="text-[#eeeeee] sm:text-2xl lg:text-4xl">I learn, I design,</p>
          <p className="text-[#eeeeee] sm:text-2xl lg:text-4xl">and I build.</p>
        </div>
      </div>
    </Section>
  )
}

export default Hero