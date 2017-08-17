import { Project } from './project';

export const PROJECTS: Project[] = [
  { 
    id: 1, 
    name: 'Footrot Flats', 
    url: 'http://footrotflats.com', 
    description: '<p>A true kiwi icon. Footrot Flats was built predominantly on Umbraco with a strip archive built on Serenity which is called in via API requests.</p><p>I personally worked on the Umbraco backend as well as developing 95% of the front end code. Footrot Flats is a Best Awards finalist for 2017.</p>', 
    thumbnail: 'project.footrotflats.png',
    tags: ["Umbraco","jQuery", "Razor", "Sass","HTML5"],
    images: "/assets/footrot-flats-01.jpg"
  },
  { id: 2, name: 'NV Interactive', 
    url: 'http://nvinteractive.com', 
    description: '<p>NV\'s flagship site got a much neeed overhaul in 2017, bringing it more in to line with recent branding changes. The site now allows the company to easily tell more stories about the work we\'ve been doing through news posts and case studies.</p><p>The site was revamped with a team of front-end developers, allowing us the opportunity to put more of our Git workflows in to practice</p>', 
    thumbnail: 'project.nvinteractive.png',
    tags: ["Umbraco","HTML","Sass","jQuery", "GSAP"],
    images: "/assets/nvinteractive-01.jpg"
  },
  { id: 3, name: 'Portraying Wellington', 
    url: 'http://portraying-wellington.com', 
    description: '<p>Designed by Charlie Ward and built for photographer Russell Kleyn, Portraying Wellington is a bespoke art piece showcasing the visual identity of Wellington through portraiture.<p><p>I built 100% of this site, with a simple and easy to manage WordPress backend and a clean interactive front end.</p>', 
    thumbnail: 'project.protrayingwellington.png',
    tags: ["WordPress", "jQuery", "HTML", "CSS","CMS development"],
    images: "/assets/portraying-wellington-01.jpg"
  },
  { id: 4, name: 'Planet FM', 
    url: 'http://www.planetaudio.org.nz/', 
    description: '<p>Planet FM is an Auckland based community radio station. The site is built on Umbraco and contains a wealth of information on the programmes aired on the station, including show content details, presenter profiles and streamable & downloadable archives of the recorded shows.</p><p>My role on this site was mostly front-end but involved some amount of Umbraco development.</p>', 
    thumbnail: 'project.planetfm.png',
    tags: ["Umbraco","Sass","CSS","jQuery","CMS development"],
    images: "/assets/planetfm-01.jpg"}
]
