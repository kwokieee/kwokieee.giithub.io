import Section from "../components/layouts/Section"
import { SectionId } from "../data/data"

function Skills() {
  return (
    <Section noPadding sectionId={SectionId.Skills}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl pt-5">Skills</h1>
        <p className="text-3xl my-5">I’m proficient in</p>
        <span className="border-t w-full max-w-xl" />
        <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/html5.svg" className="logo" alt="HTML5 logo" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/css.svg" className="logo" alt="CSS logo" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/javascript.svg" className="logo" alt="JavaScript logo" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/typescript.svg" className="logo" alt="TypeScript logo" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/react.svg" className="logo" alt="React logo" />
            <p>React</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/figma.svg" className="logo" alt="Figma logo" />
            <p>Figma</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/sql.svg" className="logo" alt="SQL logo" />
            <p>SQL</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/java.svg" className="logo" alt="Java logo" />
            <p>Java</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/python.svg" className="logo" alt="Python logo" />
            <p>Python</p>
          </div>
        </div>

        <p className="text-3xl mt-10 mb-5">I have experience with</p>
        <span className="border-t w-full max-w-xl" />
        <div className="grid grid-cols-3 gap-4 w-full max-w-xl">
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/blender.svg" className="logo" alt="Blender logo" />
            <p>Blender</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/keycloak_logo.png" className="logo" alt="Keycloak logo" />
            <p>Keycloak</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/ros.svg" className="logo" alt="ROS logo" />
            <p>Robot Operating System</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/mongodb.svg" className="logo" alt="MongoDB logo" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/c.svg" className="logo" alt="C logo" />
            <p>C</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/jenkins.svg" className="logo" alt="Jenkins logo" />
            <p>Jenkins</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/aws.svg" className="logo" alt="AWS logo" />
            <p>AWS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/openstack.svg" className="logo" alt="Openstack logo" />
            <p>Openstack</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/nginx.svg" className="logo" alt="NGINX logo" />
            <p>NGINX</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/angular.svg" className="logo" alt="Angular logo" />
            <p>AngularJS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/nestjs.svg" className="logo" alt="NestJS logo" />
            <p>NestJS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/logos/expressjs.svg" className="logo" alt="ExpressJS logo" />
            <p>ExpressJS</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Skills