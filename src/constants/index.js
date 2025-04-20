const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 13, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Production System Deployment Cycles" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: 1, suffix: "+", label: "Lean Six Sigma Green Belt" },
];

const logoIconsList = [
  {
    imgPath: "Project Management",
  },
  {
    imgPath: "Structured Problem Solving",
  },
  {
    imgPath: "Process Mapping",
  },
  {
    imgPath: "Automation",
  },
  {
    imgPath: "Organization",
  },
  {
    imgPath: "Communication",
  },
  {
    imgPath: "Value Stream Mapping",
  },
  {
    imgPath: "Data Analytics",
  },
  {
    imgPath: "HTML, CSS, JavaScript",
  },
  {
    imgPath: "Microsoft Power Automate",
  },
  {
    imgPath: "Microsoft Suite Apps",
  },
  {
    imgPath: "TinkerCAD: 3D printing",
  },
  {
    imgPath: "Instructor/Mentor",
  },
  {
    imgPath: "6S",
  },
  {
    imgPath: "SmartSheets",
  },
  {
    imgPath: "Cell Culture",
  },
  {
    imgPath: "Quality Control",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Gary brought creativity and technical expertise to the team, significantly improving our performance. His work has been invaluable in delivering results that are best practice in our production system.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "LSPS Process Engineer",
    date: "August 2023 - Present",
    responsibilities: [
      "Led strategic projects aligned with the global production system, integrating culture, leadership, supply chain optimization, waste reduction, and loss & elimination principles.",
      "Collaborated cross-functionally with global deployment teams in monthly sessions to align on best practices and content creation.",
      "Facilitated workshops on structured problem solving tools and methodologies.",
      "Championed 6S and Order Staging initiatives for the Saint Louis LSPS deployment team to improve operational flow and visual management.",
      "Drove cost-saving initiatives, implementing spend controls and awareness programs that achieved $60,000 in annual savings.",
      "Designed and launched an Improvement Card system to capture, prioritize, and feed employee-driven ideas into the Continuous Improvement (C.I.) roadmap.",
      "Developed a non-inventory management system, increasing scalability, traceability, and operational efficiency.",
      "Deployed Daily Management System (DMS) boards to enhance KPI tracking, accelerate issue escalation, and foster a culture of continuous improvement.",
      "Improved QC throughput by implementing a Scheduling Board and supporting Kanban system, raising on-time sterility test completion from 70% to 95%.",
      "Authored and deployed 9+ training guides supporting standardization and knowledge retention for cell culture and purification processes.",
      "Deployed a capacity model in Specialty Media and QC departments to improve scheduling of jobs for both planning and department leads.",
    ],
  },
  {
    review: "Gary’s contributions to the Stem Cell team have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Manufacturing Scientist: Stem Cell Manufacturing",
    date: "April 2019 - August 2023",
    responsibilities: [
      "Trained new & existing team members on processes.",
      "Worked with R&D Scientists to troubleshoot the Organoid passaging process.",
      "Created 6 training videos to increase the team's capabilities to manufacture organoids.",
      "Support the NPI process through collaboration with R&D and tech transfer. Ensure documentation is to manufacturing standards, BOM setup is correct, training is provided as required, and transfer of cell lines is coordinated for on time 1st lot manufacturing.",
      "Reviewed batch records and released sub-assembly & FG into inventory.",
      "Managed cross-site ascites production. Coordinated with planner/purchaser and site representative.",
    ],
  },
  {
    review: "Great job Gary! I appreciate your proactive behavior in maintaining lab inventory. You show leadership qualities by taking initiative and getting things done rather than having to be tasked to action. You have gladly taken on extra responsibility by working on projects and being utilized across several work centers.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Manufacturing Associate Scientist: Tissue Culture Manufacturing",
    date: "May 2013 - April 2019",
    responsibilities: [
      "Manufactured hybridoma supernatants, lysates, and IVD slides for viral detection.",
      "Cross-trained into Specialty Media manufacturing to support site consolidation.",
      "Led the implementation of two automation units, CAPIT-ALL and Wellmate for production filling and capping.",
      "Support provided in several Lean Six Sigma projects",
    ],
  },
  {
    review: "I love your enthusiasm to learn and not settle. You bring new energy to the team and I look forward to watching you develop in your new role in manufacturing.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "R&D Research Associate",
    date: "August 2012 - May 2013",
    responsibilities: [
      "Created multiple blots per day to keep the Blot Library stocked.",
      "Carried out validation of antibodies through Western Blot testing.",
      "Learned cell culture to support lysate production.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    href: "https://www.instagram.com/p/CiEf4WUO7y_/",
    backup: "https://www.instagram.com/gary.codez/",
  },
  {
    name: "md",
    imgPath: "/images/medium_icon.webp",
    href: "https://medium.com/@stroup.uxuidesign",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    href: "https://www.linkedin.com/in/gary-stroup-2317a247",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};