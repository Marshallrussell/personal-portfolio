import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://h007.weebly.com/uploads/1/4/6/0/146046514/claremontresume.pdf";
export const repoLink = "https://github.com/marshallrussell/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/yesmarshall";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
//✅
    icon: nitk,
    title: "National Laboratory of Fermilab, Chicago",
    degree: "Bachelor of Technology",
    duration: "December 2022 - May 2027",
    content1: "Major:  Industrial Mangement and Mechanical Engineering",
    content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
//✅
    icon: pba,
    title: "Carnegie Tech Academy",
    degree: "",
    duration: "May 2021 - June 2025",
    content1: "Graduated with a distinction in top quintile at the University of Carnegie Mellon of Pennslyvania.",

  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
//✅
    icon: ethindia,
    event: "Solar Vehicle Race | EPFL Solarathon",
    position: "Winner",
    content1: "Design Division's Winner, Cross-Continent's 1st Runner Up",
    content2: "Division 5K's 2nd Runner Up",
    content3: "Lucid Motors Pool Prize, Top 5",
    article: "https://lucidmotors.com/",
    project: "https://www.epfl.ch/",
    youtube: "https://www.youtube.com/@SolarCarChallenge/search",
  },
  {
    id: "a-2",
    icon: ethglobal,
//✅
    event: "ASME'25 | World's Lab on a Pill Hackathon",
    position: "Winner",
    content1: "Top 12 winners among CMU registrations",
    content2: "One of Club's Best Medical Device",
    content3: "Best Module on Chip",
    article: "https://www.asme.org/",
    project: "https://www.cmu.edu/",
    youtube: "https://www.youtube.com/watch?v=e1o8mDj-FYA",
  },
  {
    id: "a-3",
//✅
    icon: ethindia,
    event: "Engineering Business Competition: Europe Edition",
    position: "2nd Runner Up Gestion d'Entreprisre Category at EPFL",
    content1: "Built natural resources for sound and acousits offering a novel solution for organic construction.",
    content2: "https://www.epfl.ch/",
    content3: "",
    github: "",
  },
  {
    id: "a-4",
//✅
    icon: ethindia,
    event: "Industrial Business & Sustainable Farming",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by EPFL among 35 designs",
    content2: "Top 3 projects using CyberSecurity",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://www.ukri.org/news/50-winning-projects-showcase-the-latest-farming-innovations/",
  },
  {
    id: "a-5",
//✅
    icon: ethindia,
    event: "Renewable Circuits and Systems",
    position: "Winner",
    content1: "Regarded as the Best for the Design of Carbon Dioxide Cycle discovery.",
    content2: "Newer Technologies including Sodium Battery Electrodes",
    content3: "",
    youtube: "https://youtu.be/KNLUzqW8IuA?si=CZIRdnddCY94d-KZ",
    project: "",
  },
  {
    id: "a-6",
//✅
    icon: ethindia,
    event: "Solar Power Panel Internal Competition",
    position: "Research Level Prize",
    content1: "Top 10 among 500+ teams across Europe",
    content2: "Developed a cross-hybrid solar panel with black paint.",
    content3: "",
    article: "https://youtu.be/jakhtuibIa4?si=LghAf3PSkXqYGuIp",
  },
  {
    id: "a-7",
//✅
    icon: ethforall,
    event: "IBM Guided Projects - Software Developer Website",
    position: "Audited Mention",
    content1: "Secure Analysis of a Credit Card Dataset.",
    content2: "",
    content3: "",
    project: "https://www.edx.org/learn/computer-science/ibm-guided-project-secure-analysis-of-a-credit-card-dataset-v2?index=product&queryId=8630be22139d322fdc7c3123d765c3f9&position=24",
  },
  {
    id: "a-8",
//✅
    icon: ethforall,
    event: "IBM Guided Projects - Software Developer Website",
    position: "Audited Mention",
    content1: "Predict World Cup Soccer Results with ML.",
    content2: "",
    content3: "",
    project: "https://www.edx.org/learn/machine-learning/ibm-guided-project-predict-world-cup-soccer-results-with-ml-v2?index=product&queryId=e27711603e420f6c445204ecd42f1cef&position=23",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiRuby,
        name: "Ruby",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: FaGolang,
        name: "Go",
      },
      {
        id: "pl-5",
        icon: FaRust,
        name: "Rust",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-11",
        icon: SiSolidity,
        name: "Solidity",
      }
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-2",
        icon: SiRubyonrails,
        name: "Ruby on Rails",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-8",
        icon: SiDotnet,
        name: ".NET",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Homeland Security, US",
//✅
    logo: oracle,
    link: "https://www.dhs.gov/",
    positions: [
      {
        title: "Member of Technical Staff",
        duration: "Jul 2025 - Present",
        content: [
          {
            text: "Working on Electronics for Secure Lab.",
            link: "",
          },
        ],
      },
      {
        title: "Member of Design Team",
        duration: "May 2025",
        content: [
          {
            text: "Worked with Industrial Designers to Model confidential discovery equipment.",
            link: "",
          },
          {
            text: "Modeled inside of the AutoCAD nd Solidworks Software Suites.  Staff included elisted and non elisted ranking employees",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "National Laboratory, Fermilab",
//✅
    logo: averlon,
    link: "https://fnal.gov/",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Sept 2022 - Feb 2023",
        content: [
          {
            text: "Devoloped Machine Lab Computer Engineering.",
            link: ""
          },
          {
            text: "Completed Course of a Adams Dynamics Engineering.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "National Laboratory, Fermilab",
//✅
    logo: averlon,
    link: "https://fnal.gov",
    positions: [
      {
        title: "Junior Engineer",
        duration: "Apr 2023 - Apr 2024",
        content: [
          {
            text: "Led Team of Land Developers, Excavations, Project Management and Mechanical Staff.",
            link: "",
          },
          {
            text: "Managed the libraries on AutoCAD and also Julie Engineering Software Suite.",
            link: "",
          },
        ],
      },
      {
        title: "Engineer Intern",
        duration: "May 2024",
        content: [
          {
            text: "Managed the CO2 Pressure Cooling Water Systems including the Central Utility Building Vibrational Analysis.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer",
        duration: "Apr 2024",
        content: [
          {
            text: "Added Functionality and Learning Procedure for Laboratory Tech and Computing Service Leads.",
            link: "",
          },
        ],
      },
      {
        title: "Engineer Lead",
        duration: "June 2023 - Oct 2025",
        content: [
          {
            text: "Completed the Required Asset Management.",
            link: "",
          },
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Detecting Outages for Server Networks",
    github: "https://github.com/Marshallrussell/StanfordMachineLearning",
    link: "",
//✅
    image: comicify_ai,
    content:
      "Anomoly detection algorithms with High dimensional datasets.  Selecting true positives and precision and recall in F scores.  Handling GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-2",
    title: "Regognizing Bank Check Writings",
    github: "https://github.com/Marshallrussell/StanfordMachineLearning",
    link: "",
//✅
    image: comicify_ai,
    content:
      "Winning project at 3 bootcamps, Image Recognition uses Logistic regression and neural networks to recognize handwritten digits (from 0 to 9).  Used widely from zip codes to bank checks",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-3",
        icon: SiSolidity,
        name: "Solidity"
      },
    ],
  },
  {
    id: "project-3",
    title: "Machine Learning / Image Compression / Security Cams",
    github: "https://github.com/Marshallrussell/StanfordMachineLearning",
    link: "",
//✅
    image: comicify_ai,
    content:
      "An Image compression algorithm where the centroids closest to the 24 bits in a 128 x 128 pixel which comes to 393,216 bits.  Compressed down to 16 colors each using 24 bits reduced to merely 4 bits per pixel location giving a reduction of bits down to 65,920 bits.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiWeb3Dotjs,
        name: "Web3.js"
      },
      {
        id: "icon-3",
        icon: FaHardHat,
        name: "HardHat"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
//✅  not working JUST LOGO
  {
    id: "project-4",
    title: "Carnegie Pittsburgh Movie Recommendation System",
    github: "",
    link: "",
    image: ethglobal,
    content:
      "Collaborative filtering through the Cost function and the Learning algorithm.",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
    ],
  },
  {
    id: "project-5",
    title: "Non-Teaching Recruitment Portal, CMU",
    github: "",
    link: "",
    image: ecell,
    content:
      "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiJquery,
        name: "jQuery"
      },
    ],
  },
//✅  not working  LOGO
  {
    id: "project-6",
    title: "Career Development Centre, CMU Website",
    github: "",
    link: "",
    image: ethglobal,
    content:
      "The official website of Career Center, CMU with a custom built CMS.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
//✅ 
  {
    id: "project-7",
    title: "Django-CMS",
    github: "https://www.github.com/django-cms/django-cms",
    link: "",
    image: ecell,
    content:
      "A cross-platform Django application that brings people closer to the framework environment and forms meaningful page creating by organising real-world modules for free and winning web developing server applications. The app uses databases to give access to teams of like people.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django Rest Framework"
      },
      {
        id: "icon-2",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-3",
        icon: SiReplit,
        name: "Replit"
      },
      {
        id: "icon-4",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API"
      },
    ],
  },
  {
    id: "project-8",
    title: "JobBoard",
    github: "https://github.com/sarahhudaib/django-job-board",
    link: "",
//✅
    image: ecell,
    content:
      "A full-stack web application to facilitate sharing resources in college job boards with email notifications, requests and ticketing system, and analytical dashboards.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js"
      },
    ],
  },
  {
    id: "project-9",
    title: "Cash Flow Statistics",
    github: "",
    link: "",
//✅
    image: ethforall,
    content:
      "Preliminary data analysis in a security area based on a credit card clients dataset with helping frameworks & libraries.  A Python application to help users visualise and minimise cash flow statistics among multiple transactions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      }
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "",
//✅
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "1+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "4+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "3+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "American Society of Mechanical Engineers (ASME) & Society of Software Developers and Computer Engineers and Data Scientists",
    title: "Lead President",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Bitcoin.",
        link: "",
      },
      {
        text: "Led in the Bitcoin blockchain.",
        link: "https://www.cmu.edu",
      },
    ],
//✅
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, CMU",
    title: "Chair",
    duration: "December 2022 - Present",
    content: [
      {
        text: "Started Club to promote and spread the culture of GooglePlay in the college.",
        link: "",
      },
      {
        text: "Architect Idea Generator / Co-designed / developed the official website with 100K+ visitors",
        link: "https://www.cmu.edu",
      },
    ],
//✅
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "FIVERR, CMU",
    title: "Consulting Head",
    duration: "Sep 2020 - Present",
    content: [
      {
        text: "Qualified for the Design of Fiverr Freelance options",
        link: "",
      },
      {
        text: "Worked with Job and Emmpoyer as Distinguished Architect in Data Science",
        link: "",
      },
    ],
//✅
    logo: genesis,
  },
  {
    id: 4,
    organisation: "UP WORK, CMU",
    title: "Lead Design",
    duration: "Jan 2020 - Jan 2025",
    content: [
      {
        text: "Mentored college students in Software Architecture / Main Architect Idea Generator",
        link: "",
      },
    ],
//✅
    logo: iris,
  },
  {
    id: 5,
    organisation: "GITHUB, CMU",
    title: "Executive Member",
    duration: "Sep 2018 - Present",
    content: [
      {
        text: "Organised the Github Copilot ChatBOT",
        link: "",
      },
      {
        text: "Architect Idea Generator & Co-Depency with OpenAI and Sam Altman",
        link: "",
      },
    ],
//✅
    logo: ecell,
  },
  {
    id: 6,
    organisation: "MANUSCRIPT PUBLISHING / SONGWRITING, PAYHIP-CMU",
    title: "Executive AUTHOR",
    duration: "Sep 2018 - Present",
    content: [
      {
        text: "(The Innovators Circle) Authored / Published Ebook Aided With ChatBOT",
        link: "https://pe56d.s3.amazonaws.com/o_1imm94lp0lgf1eqe1d1t14ht1aoer.pdf?AWSAccessKeyId=AKIAIP3NFJ5OR5FTFOQQ&Signature=N3TkuB2CNOd3WmX%2B%2FcwWoZooRfI%3D&Expires=1743325310&response-content-disposition=inline;filename=%22preview.pdf%22&response-content-type=application/pdf",
      },
      {
        text: "(The Stitch-Spark) Authored / Published Ebook Aided With ChatBOT",
        link: "https://pe56d.s3.amazonaws.com/o_1imm9fnei1ud9uu1paf1kmrtcer.pdf?AWSAccessKeyId=AKIAIP3NFJ5OR5FTFOQQ&Signature=65ZEpwSpN5iXSvOJ9f6x9vyvXI0%3D&Expires=1743325923&response-content-disposition=inline;filename=%22preview.pdf%22&response-content-type=application/pdf",
      },
      {
        text: "(Slim Secret Theory) Authored / Published Ebook Aided With ChatBOT",
        link: "https://pe56d.s3.amazonaws.com/o_1in0k6gug1lb9n191vfc1s1mfad10.pdf?AWSAccessKeyId=AKIAIP3NFJ5OR5FTFOQQ&Signature=HRRVN22ZxRvPELxUcNNxtSUzR9I%3D&Expires=1743325982&response-content-disposition=inline;filename=%22preview.pdf%22&response-content-type=application/pdf",
      },
    ],
//✅
    logo: ecell,
  },
  {
    id: 7,
    organisation: "Marshall Fitzpatricks, ACTOR-CMU",
    title: "Exclusive Director / Actor",
    duration: "Sep 2018 - Present",
    content: [
      {
        text: "Organised the Hollywood Acts Intenting to Create",
//        link: "https://h007.weebly.com",
      },
      {
        text: "Briefing of Citizen Enlisted Careers",
//        link: "https://pe56d.s3.amazonaws.com/o_1imrdnd511gc21icb3b72c3lf9r.pdf?AWSAccessKeyId=AKIAIP3NFJ5OR5FTFOQQ&Signature=IcNwl9exnM3ROHws8yGh6nFDW1Y%3D&Expires=1743326289&response-content-disposition=inline;filename=%22preview.pdf%22&response-content-type=application/pdf",
      },
    ],
//✅
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/yesmarshall",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/marshallrussell",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:marshallarussell@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/yesmarshall",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/yesmarshall",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Marshall Russell",
    githubUsername: 'marshallrussell',
    tagLine: "Software Developer / DJANGO / Freelance Projects / IBM Guided Projects / National Laboratory Fermilab",
    intro: "Engineer / Software Developer from US who is either busy improving his craft or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 3;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['firstcontributions/first-contributions', 'public-apis/public-apis', 'django-cms/django-cms'];
