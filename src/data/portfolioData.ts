// ================================================
// Portfolio Data — single source of truth
// Add/edit items here; components render via .map()
// ================================================

// ================================================
// PROJECTS
// ================================================
export interface Project {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  features: string[];
  techStack: string[];
  role: string;
  status: string;
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Real-time Chat Web Application',
    image: '/assets/work/chatApp.png',
    shortDescription:
      'A full-stack real-time chat application with private and group messaging powered by WebSockets.',
    fullDescription:
      'This real-time chat application is built with React, Node.js, Express, and Socket.io. It supports instant messaging, real-time online/offline status, user profiles, and both private and group conversations. The system focuses on smooth real-time communication with secure authentication and persistent message storage.',
    problemSolved:
      'Solves delays in traditional REST-based communication by using WebSockets to provide instant two-way messaging, presence updates, and real-time user interaction.',
    features: [
      'Real-time private and group messaging using WebSockets',
      'Online/offline user presence tracking',
      'Persistent chat history saved in the database',
      'Typing indicators and message status updates',
      'Secure JWT-based authentication',
      'Responsive mobile-friendly user interface'
    ],
    techStack: ['React', 'Node.js', 'Express', 'Socket.io', 'PostgreSQL', 'JWT'],
    role: 'Full-Stack Developer',
    status: 'In Progress',
    liveLink: '',
    githubLink: ''
  },

  {
    id: 2,
    title: 'Inventory Management System',
    image: '/assets/work/inventory.jpg',
    shortDescription:
      'A stock management system for small-to-medium businesses to handle products, suppliers, and sales records.',
    fullDescription:
      'This inventory management system is designed to manage product stock, supplier details, purchase records, and sales logs through a structured dashboard. It allows authorized users to track stock levels, update product details, manage suppliers, and monitor inventory movement efficiently.',
    problemSolved:
      'Reduces manual inventory tracking errors by providing a centralized system for stock updates, supplier management, and business record handling.',
    features: [
      'Product stock level tracking',
      'Low stock alert indication',
      'Supplier information management',
      'Sales and purchase record handling',
      'Role-based user authentication',
      'Dashboard interface for inventory overview'
    ],
    techStack: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    role: 'Full-Stack Developer',
    status: 'In Progress',
    liveLink: '',
    githubLink: ''
  },

  {
    id: 3,
    title: 'Primary School Website',
    image: '/assets/work/school.webp',
    shortDescription:
      'A responsive informational website for a primary school with academic details, announcements, and inquiry forms.',
    fullDescription:
      'This primary school website is designed to present school information in a clear and user-friendly way. It includes sections for school introduction, academic programs, staff details, events, announcements, gallery, and contact information. The website helps parents and students easily access important school updates and admission details.',
    problemSolved:
      'Improves communication between the school and parents by providing a centralized online platform for school information, announcements, and admission inquiries.',
    features: [
      'School overview and academic program sections',
      'Teacher and staff profile display',
      'Events, announcements, and news updates',
      'Admission inquiry and contact forms',
      'Photo gallery for school activities',
      'Responsive design for mobile and desktop users'
    ],
    techStack: ['React', 'HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Developer',
    status: 'Completed',
    liveLink: '',
    githubLink: ''
  },

  {
    id: 4,
    title: 'Construction Company Website',
    image: '/assets/work/construction.webp',
    shortDescription:
      'A professional corporate website showcasing construction services, completed projects, and client inquiries.',
    fullDescription:
      'This construction company website is a marketing and portfolio platform built to showcase company services, completed projects, client testimonials, and contact details. It provides a professional online presence for the business and allows potential customers to submit inquiries through a contact form.',
    problemSolved:
      'Helps the construction company build trust and generate customer inquiries by presenting services, project work, and business information in a professional online format.',
    features: [
      'Service catalogue for construction-related work',
      'Completed project showcase section',
      'Interactive project image gallery',
      'Client testimonial section',
      'Contact and inquiry form',
      'Responsive and SEO-friendly page structure'
    ],
    techStack: ['React', 'HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Developer',
    status: 'Completed',
    liveLink: '',
    githubLink: ''
  },

  {
    id: 5,
    title: 'Social Media Web Application',
    image: '/assets/work/socialMedia.png',
    shortDescription:
      'A university group project social media platform with posts, profiles, followers, and interactive user features.',
    fullDescription:
      'This social media web application was developed as a university group project. The platform includes user profiles, post feeds, media sharing, likes, comments, followers, explore sections, and profile-based content filtering. The project focuses on building a modern social media experience using reusable frontend components and structured application state management.',
    problemSolved:
      'Provides a practical social media platform concept that demonstrates user interaction, content sharing, profile management, and scalable frontend component architecture.',
    features: [
      'User profile pages with personal posts',
      'Post feed with image and video content support',
      'Like, comment, and follower functionality',
      'Explore section for discovering posts',
      'Reusable React components for posts and profiles',
      'State management for user and post data'
    ],
    techStack: ['React', 'TypeScript', 'Redux', 'SCSS', 'Material UI','Django','Python','Tailwind CSS'],
    role: 'Frontend Developer / Group Member',
    status: 'In Progress',
    liveLink: '',
    githubLink: ''
  }
];

// ================================================
// SERVICES
// ================================================
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'I build responsive and user-friendly websites using modern technologies like React, HTML, CSS, JavaScript, Java and SpringBoot.',
    icon: 'fa-regular fa-window-maximize',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description:
      'Creating mobile applications using Java and Android Studio for a seamless user experience on Android.',
    icon: 'fa-solid fa-mobile-screen-button',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description:
      'Designing intuitive interfaces and engaging user experiences using tools like Figma and modern design principles.',
    icon: 'fa-solid fa-palette',
  },
  {
    id: 4,
    title: 'Backend API',
    description:
      'Developing robust server-side logic and scalable REST/GraphQL APIs using Node.js and Spring Boot.',
    icon: 'fa-solid fa-server',
  },
  {
    id: 5,
    title: 'Database Management',
    description:
      'Designing and optimizing database schemas using PostgreSQL, MsSQL, and MongoDB for high performance.',
    icon: 'fa-solid fa-database',
  },
];

// ================================================
// TOOLS
// ================================================
export interface Tool {
  name: string;
  image: string;
}

export const tools: Tool[] = [
  { name: 'VS Code',    image: '/assets/tools/vsc.webp' },
  { name: 'Git',        image: '/assets/tools/git.webp' },
  { name: 'IntelliJ',  image: '/assets/tools/intelliJ.png' },
  { name: 'PostgreSQL', image: '/assets/tools/postgreSql.png' },
  { name: 'Figma',      image: '/assets/tools/figma.webp' },
];

// ================================================
// SOCIAL LINKS
// ================================================
export interface SocialLink {
  name: string;
  url: string;
  image: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1CpnEv7mzz/?mibextid=wwXIfr',
    image: '/assets/social/facebook.webp',
  },
  /* {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    image: '/assets/social/instagram.jpg',
  }, */
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amrul-haq-23a45b242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    image: '/assets/social/linkedin.webp',
  },
];

// ================================================
// ABOUT INFO CARDS
// ================================================
export interface InfoCard {
  id: number;
  icon: string;
  title: string;
  value: string;
}

export const infoCards: InfoCard[] = [
  {
    id: 1,
    icon: 'fa-solid fa-user-graduate',
    title: 'Education',
    value: 'BSc (Hons) Information Systems Engineering & Informatics',
  },
  {
    id: 2,
    icon: 'fa-solid fa-code',
    title: 'Languages',
    value: 'JavaScript, TypeScript, Java, Python',
  },
  {
    id: 3,
    icon: 'fa-solid fa-laptop-code',
    title: 'Frameworks',
    value: 'React, React Native, Node.js + Express, Spring Boot',
  },
  {
    id: 4,
    icon: 'fa-regular fa-calendar-check',
    title: 'Projects',
    value: 'Built more than 5 projects',
  },
];
