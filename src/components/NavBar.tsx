import { Icon } from "@iconify/react";
import { useState } from "react";
import { SectionId } from "../data/data";
import { sections } from "../data/data";

interface NavLinkProps {
  navLinkId: string;
  scrollToId: string;
}

function NavLink({ navLinkId, scrollToId }: NavLinkProps) {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");
  const handleClick = () => {
    setActiveNavLinkId(activeNavLinkId);
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <span id={navLinkId} className={activeNavLinkId === navLinkId ? "" : "p-4 cursor-pointer text-[#eeeeee]"} onClick={handleClick} >
      {navLinkId}
    </span>
  );
}

function NavBar() {
  const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
  const toggleNavBarExpanded = () => {
    setIsNavBarExpanded(!isNavBarExpanded);
  }
  
  return (
    <nav className="fixed w-screen p-4 flex items-center z-10 bg-black shadow-md">
      <div className="ml-1">
        <NavLink navLinkId={sections[0].sectionTitle} scrollToId={sections[0].sectionId} />
      </div>
      <Icon icon="material-symbols:menu-rounded" color="#eeeeee" className="md:hidden absolute right-6 w-6 h-6 cursor-pointer" onClick={toggleNavBarExpanded} />
      <div className={"bg-black absolute top-14 left-0 w-full flex flex-col md:relative md:top-0 md:right-0 md:w-auto md:block ml-auto " + (isNavBarExpanded ? "" : "hidden")}>
      {
        sections.map((section, index) =>
          section.isInNavBar && <NavLink key={index} navLinkId={section.sectionTitle} scrollToId={section.sectionId} />)
      }
      </div>
    </nav>
  )
}

export default NavBar