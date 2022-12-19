/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Skills: 'skills',
    Work: 'work',
    Projects: 'projects',
    Contact: 'contact',
};

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

