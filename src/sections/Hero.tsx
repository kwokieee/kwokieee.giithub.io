import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"

function Hero() {
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="h-screen lg:h-auto flex flex-col lg:flex-row">
        <div className="lg:max-w-[1000px]">
          <img src="/images/hero-photo.png" className="object-cover" />
        </div>
        <div className="bg-[#393434] p-6 flex flex-col justify-center items-center h-full lg:h-auto w-full">
          <p className="text-[#eeeeee] text-3xl sm:text-4xl lg:text-6xl font-extrabold">Hi, I'm Bryan.</p>
          <div className="bg-[#eeeeee] h-0.5 w-5/6 max-w-xl my-1 sm:my-2 lg:my-6 rounded-sm" />
          <p className="text-[#eeeeee] sm:text-2xl lg:text-3xl xl:text-4xl">I learn, I design,</p>
          <p className="text-[#eeeeee] sm:text-2xl lg:text-3xl xl:text-4xl">and I build things.</p>
        </div>
      </div>
    </Section>
  )
}

export default Hero