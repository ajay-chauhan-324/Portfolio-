import { FaLightbulb, FaPaintBrush, FaCode,FaCheckCircle, FaReact, FaServer,  FaPalette, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';

export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building modern, responsive, and interactive web applications with React and contemporary frontend technologies.",
    tags: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  {
    title: "UI Development",
    icon: FaPalette,
    description:
      "Creating accessible, reusable, and visually appealing user interfaces with modern component libraries.",
    tags: [
      "shadcn/ui",
      "Headless UI",
      "Radix UI",
      "Responsive Design",
      "Reusable Components"
    ]
  },
  {
    title: "API Integration",
    icon: FaServer,
    description:
      "Connecting frontend applications with REST APIs and efficiently managing client and server state.",
    tags: [
      "REST APIs",
      "Axios",
      "TanStack Query",
      "JSON",
      "API Integration"
    ]
  },
  {
    title: "Backend Development",
    icon: FaDatabase,
    description:
      "Developing scalable backend services and REST APIs with modern web technologies.",
    tags: [
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "MySQL"
    ]
  },
  {
    title: "Forms & Validation",
    icon: FaCheckCircle,
    description:
      "Building secure, user-friendly forms with validation and improved user experience.",
    tags: [
      "React Hook Form",
      "Zod",
      "Form Validation",
      "Authentication"
    ]
  },
  {
    title: "Tools & Workflow",
    icon: FaTools,
    description:
      "Using modern development tools for version control, deployment, and efficient collaboration.",
    tags: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Netlify"
    ]
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Frontend Developer",
  company: "Elite Code Technologies",
  duration: "Jan 2026 - Jun 2026 (6 months)",
  description:
    "Developed responsive and user-friendly web interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS. Collaborated with senior developers to implement UI components, integrated REST APIs, fixed bugs, optimized application performance, and followed Git-based version control in an Agile development environment.",
  color: "purple"
  },
  // {
  //   role: "Web Developer",
  //   company: "Digital Solutions LLC",
  //   duration: "2018 - 2020",
  //   description:
  //     "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
  //   color: "pink"
  // },
  // {
  //   role: "Junior Developer",
  //   company: "StartUp Ventures",
  //   duration: "2016 - 2018",
  //   description:
  //     "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
  //   color: "blue"
  // }
];
