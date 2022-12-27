/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Skills: 'skills',
    Work: 'work',
    Footer: 'footer',
};

export const sections = [
    {
        sectionId: "hero",
        sectionTitle: "Bryan Kwok",
        isInNavBar: false
    },
    {
        sectionId: "about",
        sectionTitle: "About",
        isInNavBar: true
    },
    {
        sectionId: "work",
        sectionTitle: "Work",
        isInNavBar: true
    },
    {
        sectionId: "footer",
        sectionTitle: "Footer",
        isInNavBar: false
    }
]

/**
 * Hero data
 */
export const heroData = {
    imagePath: '/images/'
}

/**
 * External links
 */
export const cityosVideoUrl = 'https://www.youtube.com/watch?v=J7uF4DWtZ-U&ab_channel=STEngineering'
  
export type SectionId = typeof SectionId[keyof typeof SectionId];

