import { Icon } from "@iconify/react";
import { ReactNode, useState } from "react";
import { SectionId } from "../data/data";
import { sections } from "../data/data";

interface NavLinkProps {
  navLinkId: string;
  scrollToId: string;
  children: ReactNode
}

function NavLink({ navLinkId, scrollToId, children }: NavLinkProps) {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");
  const handleClick = () => {
    setActiveNavLinkId(activeNavLinkId);
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <span id={navLinkId} className={activeNavLinkId === navLinkId ? "" : "p-4 cursor-pointer text-[#eeeeee]"} onClick={handleClick} >
      {children}
    </span>
  );
}

function NavBar() {
  const [isNavBarExpanded, setIsNavBarExpanded] = useState(false);
  const toggleNavBarExpanded = () => {
    setIsNavBarExpanded(!isNavBarExpanded);
  }
  
  return (
    <nav className="sticky top-0 w-full px-4 flex items-center z-10 bg-black shadow-md">
      <div className="ml-1">
        <NavLink navLinkId={sections[0].sectionTitle} scrollToId={sections[0].sectionId}>
          <div className="flex my-0">
            <p className="m-0">Bryan Kwok</p>
            <img src="/logos/bk.svg" alt="Main logo"className="w-6 ml-3" />
          </div>
        </NavLink>
      </div>
      {
        isNavBarExpanded
          ? <Icon icon="gridicons:cross" color="#eeeeee" className="md:hidden absolute right-6 w-6 h-6 cursor-pointer" onClick={toggleNavBarExpanded} />
          : <Icon icon="material-symbols:menu-rounded" color="#eeeeee" className="md:hidden absolute right-6 w-6 h-6 cursor-pointer" onClick={toggleNavBarExpanded} />
      }
      <div className={"bg-black absolute top-14 left-0 w-full flex flex-col md:relative md:top-0 md:right-0 md:w-auto md:block ml-auto " + (isNavBarExpanded ? "" : "hidden")}>
      {
        sections.map((section, index) =>
          section.isInNavBar && <NavLink key={index} navLinkId={section.sectionTitle} scrollToId={section.sectionId}>{section.sectionTitle}</NavLink>)
      }
      </div>
    </nav>
  )
}

export default NavBar