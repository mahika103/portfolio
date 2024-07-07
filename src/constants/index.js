import calculator from "../assets/projects/calculator.png";
import hms from "../assets/projects/hms.png";
import portfolio from "../assets/projects/portfolionew.jpg";



//export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

//export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

/*export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
*/
export const PROJECTS = [
  {
    title: "Calculator",
    image: calculator,
    description:
      "This calculator, built with JavaScript, HTML, and CSS, features a responsive design for seamless use on any device. It supports basic arithmetic operations with 10+ buttons for input and calculations.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Hospital Management System",
    image: hms,
    description:
      "Implemented Role-Based Access Control (RBAC) for 3 user roles (administrators, doctors, patients) to ensure specific dashboard access. Integrated a secure, real-time message board for seamless admin-patient communication. Developed an intuitive appointment booking system, reducing booking time by 50%.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "This portfolio website, developed with React, showcases my skills, projects, and experience. It features a clean design, easy navigation, and a responsive layout for all devices. The site includes 5 sections, uses 10+ React components, integrates 3 APIs, and ensures 100% responsive design.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Sector-10, Dwarka, New Delhi",
  phoneNo: "+91 7291807323 ",
  email: "mahikabatra103@gmail.com",
};
