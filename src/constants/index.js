import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  kyanon,
  chanbrothers,
  jobit,
  tripguide,
  hahalolo,
  python,
  project,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: web,
  },

  {
    title: "Data Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Software Developer Apprentice",
    company_name: "Kyanon Digital",
    icon: kyanon,
    iconBg: "#383E56",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Create a new feature and update an old one based on customer requirements",
      "Collaborate with team members to ensure alignment with project goals",
      "Test new features to ensure they function correctly in different browsers and devices",
      "Refactor and optimize existing code to improve readability and maintainability",
      "Implement small UI/UX improvements based on user feedback",
      "Assist in debugging and fixing issues reported by customers or QA",
    ],
  },
  // {
  //   title: "Software Developer Intern",
  //   company_name: "Kyanon Digital",
  //   icon: kyanon,
  //   iconBg: "#383E56",
  //   date: "May 2024 - Aug 2024",
  //   points: [
  //     "Developing a web applications's template using React.js and other related technologies.",
  //     "Support the raleted team to develop and maintain the operation site using WordPress CMS, customizing CSS and JS.",
  //     "Manage user content through a third-party CMS by fetching and calling the CMS API.",
  //   ],
  // },
  {
    title: "Data Analyst",
    company_name: "Hahalolo",
    icon: hahalolo,
    iconBg: "#383E56",
    date: "May 2022 - Feb 2023",
    points: [
      "Work with Python Pandas to transform data from flat files and stored to database.",
      "Using Excel to generate fake data based on specific requirements and purposes to serve market research problems.",
      "Using Power BI to create a dashboard that visualizes user information on a website.",
      "Developing a basic Apache Kafka Consumer in Python to retrieve log files from Kowl and process the logs to extract necessary information using regular expressions.",
    ],
  },

  {
    title: "Personal Projects",
    icon: project,
    iconBg: "#383E56",
    points: [
      "Work with Python Pandas to transform data from flat files and stored to database.",
      "Using Excel to generate fake data based on specific requirements and purposes to serve market research problems.",
      "Using Power BI to create a dashboard that visualizes user information on a website.",
      "Developing a basic Apache Kafka Consumer in Python to retrieve log files from Kowl and process the logs to extract necessary information using regular expressions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chansbrothers",
    description:
      "Web-based platform that allows users to search, book, and manage tour operations with various destinations, promotions, brochures and many stories about travel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chanbrothers,
    source_code_link: "https://www.chanbrothers.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
