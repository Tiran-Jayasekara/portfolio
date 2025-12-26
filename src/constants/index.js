import {
  mobile,
  backend,
  creator,
  web1,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  SpringBoot,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  MySQL,
  Elzian,
  sign,
  pwa,
  cicd,
  hashbaze,
  peerwave,
  mui,
  zustand,
  docker,
  ssk,
  ud,
  cyberpola,
  atdigital,
  ui,
  empite,
  contry,
  peerwaveecom,
  weather,
  dog,
  bee,
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
    title: "Web Developer",
    icon: web1,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Progressive Web App Developer",
    icon: pwa,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "CI/CD Pipeline With GitHub Action",
    icon: cicd,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Spring Boot",
    icon: SpringBoot,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "CI/CD",
    icon: cicd,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "HashBaze",
    icon: hashbaze,
    iconBg: "#E6DEDD",
    date: "March 2025 - Present",
    points: [
      "Kelsen Dashboard, Word Add-in & E-commerce Applications",
      "Tech Stack: React.js, MUI, Zustand, Monorepo, NestJS (Microservices), PostgreSQL, Dgraph, LangChain, Google Vertex AI, LLMs, REST APIs, GitHub Actions, Hostinger",
      "Played a key role in the design, development, and scaling of the Kelsen platform, consisting of:",
      "Kelsen Dashboard (web application)",
      "Kelsen Word Add-in (Microsoft Word extension)",

      "Led and contributed to a monorepo-based architecture, ensuring shared libraries, consistent UI/UX, and efficient developer workflows.",
      "Oversaw and guided a development team by assigning tasks, reviewing code, tracking progress, and mentoring developers on best practices and technical decisions.",
      "Actively participated in project planning, sprint breakdowns, architecture discussions, and delivery timelines, contributing to on-time and high-quality releases.",
      "Built scalable and reusable frontend applications using React.js, MUI, and Zustand, implementing a shared design system across multiple applications.",
      "Developed backend microservices with NestJS to handle document ingestion, embedding generation, semantic search, and LLM-based workflows.",
      "Integrated PostgreSQL for relational data and Dgraph for vector embeddings to enable high-performance semantic retrieval.",
      "Implemented an end-to-end document processing pipeline:",
      "PDF upload → text extraction → embedding generation → vector storage → semantic retrieval.",
      "Integrated LangChain and Google Vertex AI to deliver context-aware, similarity-based LLM responses within both the dashboard and Word Add-in.",

      "Contributed to multiple e-commerce applications, developing features such as product management, order processing, checkout flows, and admin dashboards.",
      "Improved system performance, UI/UX quality, and maintainability through code optimization, bug fixes, CI/CD improvements, and monorepo best practices.",
      "Collaborated closely with designers, QA engineers, and cross-functional teams to deliver reliable, production-ready solutions.",
    ],
  },
  {
    title: " Associate Software Engineer",
    company_name: "HashBaze",
    icon: hashbaze,
    iconBg: "#E6DEDD",
    date: "March 2024 - March 2025",
    points: [
      "Tech Stack: React.js, Node.js, NestJS, PostgreSQL, Jenkins, GitHub Pages, Hostinger, REST APIs",
      "Worked on multiple e-commerce applications, implementing features such as product listings, cart flow, checkout, authentication, and admin modules",
      "Developed and maintained frontend components using React.js and integrated backend APIs.",
      "Created and managed CI/CD pipelines using Jenkins, automating build, test, and deployment workflows.",
      "Deployed applications to Hostinger, GitHub Pages, and other hosting platforms, ensuring stable and reliable production environments.",
      "Assisted in backend development using Node.js / NestJS, API integrations, and database operations.",
      "Performed bug fixing, performance improvements, and cross-team collaboration with senior engineers and QA.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-employed",
    icon: peerwave,
    iconBg: "#D1E8E2",
    date: "April 2023 - Present",
    points: [
      "Worked with clients to design and develop responsive and scalable web applications tailored to business needs.",
      "Built full-stack solutions using React.js, Next.js, Tailwind CSS, Material UI.",
      "Delivered high-quality, production-ready solutions while communicating effectively with clients.",
    ],
  },
  {
    title: " Intern Software Engineer",
    company_name: "Elzian Agro, Sri Lanka",
    icon: Elzian,
    iconBg: "#383E56",
    date: "August 2022 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js , Node.js , MySQL and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers,Mobile Developers and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Book Shop",
    description:
      "A web-based platform that enables users to search for books and other items can also expand its features to provide access to additional services.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Tiran-Jayasekara",
  },
  {
    name: "Traveler",
    description:
      "A web-based application that empowers users to discover places, services, and relevant information about their desired destination.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Tiran-Jayasekara",
  },
  {
    name: "Car Rent",
    description:
      "A mobile application for vehicle rental owners that allows customers to search and book available vehicles. Owners can approve or reject orders",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tiran-Jayasekara",
  },
  {
    name: "Sign Language",
    description:
      "A mobile application that uses advanced technology to recognize and interpret Sri Lankan sign language gestures. The application will convert these gestures into text, and then use text-to-speech technology to provide an audible output of the translated text",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: sign,
    source_code_link: "https://github.com/Tiran-Jayasekara",
  },
  {
    name: "SSK Water Filter Website",
    description:
      "A responsive business website built for SSK Water Filter to showcase products and services. Designed with modern UI using React and Tailwind CSS to provide a clean and user-friendly experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: ssk,
    source_code_link: "https://github.com/Tiran-Jayasekara",
  },
  {
    name: "Smart City PWA",
    description:
      "A Progressive Web Application (PWA) built to digitalize an entire city by centralizing information about government services, local businesses, tourist destinations, and more. Designed to function like a native mobile app with offline support and real-time updates via push notifications.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      },
      {
        name: "Express.js",
        color: "gray-text-gradient",
      },
    ],
    image: ud, // replace this with your actual imported image variable
    source_code_link: "https://udadumbara.info", // update if there's a public repo
  },
  {
    name: "CyberPola Web Application",
    description:
      "An e-commerce web application developed to streamline online shopping experiences. Features include user authentication, product listings, order management, and a responsive design that delivers a smooth user experience across all devices.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "red-text-gradient",
      },
      {
        name: "Express.js",
        color: "gray-text-gradient",
      },
    ],
    image: cyberpola, // replace with actual image variable
    source_code_link: "https://github.com/Tiran-Jayasekara", // update if you have a repo
  },
  {
    name: "AT Digital UI Projects",
    description:
      "A collection of responsive websites and landing pages built using React.js and Tailwind CSS. These projects showcase clean UI design, mobile-first responsiveness, and reusable components tailored for different business needs.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: atdigital, // Replace with a screenshot or preview image of one of the sites
    source_code_link: "https://github.com/Tiran-Jayasekara/AT-Digital", // Or link to a specific one if you'd prefer
  },
  {
    name: "XiTeb UI Projects",
    description:
      "A collection of responsive websites and landing pages built using React.js and Tailwind CSS. These projects showcase clean UI design, mobile-first responsiveness, and reusable components tailored for different business needs.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: ui, // Replace with a screenshot or preview image of one of the sites
    source_code_link:
      "https://github.com/Tiran-Jayasekara/Xiteb?tab=readme-ov-file", // Or link to a specific one if you'd prefer
  },
  {
    name: "Empite UI Projects",
    description:
      "A collection of responsive websites and landing pages built using React.js and Tailwind CSS. These projects showcase clean UI design, mobile-first responsiveness, and reusable components tailored for different business needs.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: empite, // Replace with a screenshot or preview image of one of the sites
    source_code_link:
      "https://github.com/Tiran-Jayasekara/Empite_FrontEnd?tab=readme-ov-file", // Or link to a specific one if you'd prefer
  },
  {
    name: "Country Comparison Application",
    description:
      "A dynamic web application built with React, Vite, and Redux Toolkit, designed to allow users to compare various metrics across different countries. Features include real-time data fetching, an intuitive UI, and smooth interactivity for comparing GDP, population, area, and other country-specific statistics.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "orange-text-gradient",
      },
    ],
    image: contry, // Replace with the actual image variable
    source_code_link: "https://github.com/Tiran-Jayasekara/countryComparison", // Update with the actual repo link
  },
  {
    name: "PeerWave E-commerce PWA",
    description:
      "A Progressive Web Application (PWA) designed for e-commerce using Next.js and Tailwind CSS. The app provides a seamless shopping experience with offline support, responsive design, and real-time features. Users can browse products, manage their cart, and complete purchases in an app-like experience, even when offline.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: peerwaveecom, // Replace with actual image variable
    source_code_link:
      "https://github.com/Tiran-Jayasekara/PeerWave-ECommerce?tab=readme-ov-file", // Update with the actual repo link
  },
  {
    name: "Weather App",
    description:
      "A weather application built with React that allows users to check real-time weather updates. The app fetches data from a weather API and displays key information like temperature, humidity, wind speed, and weather conditions. Features include location-based weather and a clean, user-friendly interface.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "API Integration",
        color: "green-text-gradient",
      },
    ],
    image: weather, // Replace with actual image variable
    source_code_link:
      "https://github.com/Tiran-Jayasekara/weatherApp?tab=readme-ov-file", // Update with actual repo link
  },
  {
    name: "Dogo Tales Blog Site",
    description:
      "A blog website built with React that features stories, tips, and information related to dogs. The site includes a clean and responsive design with features like post categories, search functionality, and interactive comment sections to engage readers.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Blog",
        color: "green-text-gradient",
      },
    ],
    image: dog, // Replace with the actual image variable
    source_code_link: "https://github.com/Tiran-Jayasekara/DoggoTales", // Update with the actual repo link
  },
  {
    name: "Bee Blogger",
    description:
      "A blog site built with React focused on sharing insightful content about bees, their importance, and sustainability. The site features a responsive design, categorized posts, a search bar, and a comment section to foster user interaction and engagement.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Blog",
        color: "green-text-gradient",
      },
    ],
    image: bee, // Replace with the actual image variable
    source_code_link: "https://github.com/Tiran-Jayasekara/BeeBlog?tab=readme-ov-file", // Update with the actual repo link
  },
];

export { services, technologies, experiences, testimonials, projects };
