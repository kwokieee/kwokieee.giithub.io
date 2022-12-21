import Section from '../components/layouts/Section';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <Section noPadding sectionId="footer">
      <div className="bg-[#393434] p-8">
        <div>
          <p className="text-2xl font-bold text-[#eeeeee]">Connect with me!</p>
        </div>
        <div className="flex justify-center pt-4">
          <a href='https://github.com/kwokieee' target='_blank'>
            <Icon icon="mdi:github" width={30} color="#eeeeee" className="mr-6" />
          </a>
          <a href='https://www.linkedin.com/in/bryan-kwok/' target='_blank'>
            <Icon icon="mdi:linkedin" width={30}color="#eeeeee" />
          </a>
          <a href='mailto:bryankwokyf@gmail.com' target='_blank'>
            <Icon icon="material-symbols:mail" width={30} color="#eeeeee" className="ml-6" />
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Footer