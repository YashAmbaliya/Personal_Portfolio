import project1 from "../assets/project_img_1.png";
import project2 from "../assets/project_img_2.png";
import project3 from "../assets/project_img_3.png";
import project4 from "../assets/project_img_4.png";
import project5 from "../assets/project_img_5.png";
import project6 from "../assets/project_img_6.png";

import project1_1 from "../assets/project_img_1_1.png";
import project1_2 from "../assets/project_img_1_2.png";
import project1_3 from "../assets/project_img_1_3.png";
import project1_4 from "../assets/project_img_1_4.png";
import project1_5 from "../assets/project_img_1_5.png";
import project1_6 from "../assets/project_img_1_6.png";
import project1_7 from "../assets/project_img_1_7.png";
import project1_8 from "../assets/project_img_1_8.png";

import project2_1 from "../assets/project_img_2_1.png";

export const HERO_CONTENT = `I am a passionate frontend web developer with 1.5+ years of experience, including six months of training and internship, focused on crafting robust and scalable web applications. With hands-on expertise in Vue.js, Nuxt.js, and Vuex, I have built a strong foundation in frontend development, while also gaining knowledge of React.js and Redux through practice projects. Skilled in Tailwind CSS, Bootstrap, Material UI, Nuxt UI, and Vuetify, I enjoy building reusable components and writing clean, optimized code. I am eager to keep learning new technologies and contribute to innovative solutions that enhance user experience and drive business growth.`;

export const ABOUT_TEXT =
	"As a dedicated and versatile Frontend Developer with 1.5+ years of experience, including 6 months of training and internship, I have a proven record of building scalable, efficient, and user-centric web applications. During this time, I strengthened my expertise in Vue.js and Nuxt.js while also gaining knowledge of React.js and Redux through practice projects, giving me a strong foundation in frontend development, state management, and modern JavaScript practices. I am proficient in UI frameworks and libraries such as Tailwind CSS, Bootstrap, Material UI, Nuxt UI, and Vuetify, and enjoy creating reusable components, utility classes, and clean, optimized code. My experience covers CSR (Client-Side Rendering) and SSR (Server-Side Rendering), providing a strong understanding of rendering strategies for performance and SEO optimization, along with familiarity in Nuxt Nitro for creating server-side APIs. Skilled in debugging, DOM manipulation, and browser developer tools, I excel at resolving issues to enhance application stability and performance. I thrive in collaborative environments, take pride in problem-solving, and actively explore new frameworks and best practices to stay current with industry trends. My goal is to continuously refine my expertise while contributing to innovative projects that drive business growth and deliver exceptional user experiences.";

export const EXPERIENCES = [
	{
		year: "October-2024 - Present",
		role: "Frontend Developer",
		company: "Private Workspace, Kosad, Surat, Gujarat",
		description: `I work in a private office focused on freelance clients, delivering high-quality, custom web solutions across multiple projects and domains. My responsibilities include building responsive UIs, integrating APIs, and implementing state management with Pinia.\n
- NOURIA’H: A fully responsive web platform for chefs and restaurants to create dynamic, SEO-friendly live menus with a CMS for managing and publishing content. Menus are optimized for Google search visibility and tailored for restaurants, chefs, and food truck owners.\n
- Modelrecs: A social media platform for models and modeling enthusiasts, enabling users to upload photos and videos, interact through posts, comments, likes, shares, and follow other models. The project is currently under development.`,
		technologies: [
			"Vue.js 3",
			"Nuxt.js 3",
			"Pinia Store",
			"Tailwind CSS",
			"Material Tailwind",
			"Nuxt UI",
			"JavaScript",
			"HTML",
			"CSS",
		],
	},
	{
		year: "January-2024 - July-2024",
		role: "Frontend Developer Intern",
		company: "Infinity Brains, Vesu, Surat, Gujarat",
		description: `Worked on in-house products such as Restroworld, Garba Jockey, Redprix, and an HRMS mobile application, primarily focused on marketing and digital solutions. Restroworld: A social media platform for restaurants to enhance engagement, where I redesigned the posts feed and implemented payment gateways (Cashfree, PayUMoney) after research and evaluation. Redjinni: Completely redesigned the official company website by creating all web pages and custom components, ensuring full responsiveness across mobile, tablet, and desktop devices. General: Handled end-to-end frontend development, including UI design, API integration, backend data management, bug fixing, and adding new functionalities across projects.`,
		technologies: [
			"Vue.js 2",
			"Vuex Store",
			"Tailwind CSS",
			"Bootstrap 5",
			"JavaScript",
			"HTML",
			"CSS",
			"Node.js",
		],
	},
];

const projectImageArray_1 = [
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
];

const projectImageArray_2 = [
	project1_1,
	project1_2,
	project1_3,
	project1_4,
	project1_5,
	project1_6,
	project1_7,
	project1_8,
];

export const PROJECTS = [
	{
		title: "Personal Portfolio WebSite",
		image: project2_1,
		description:
			"A personal portfolio website serves as a digital showcase, introducing me, detailing my professional expertise, and highlighting my accomplishments. It offers a comprehensive overview of my work, including my skillset, work experience, and a curated selection of personal projects.. ",
		technologies: [
			"React Js",
			"Tailwind CSS",
			"HTML",
			"CSS",
			"JavaScript",
			"Framer Motion",
		],
	},
	{
		title: "Movie Streaming Web-App",
		image: projectImageArray_1,
		description:
			"The basic online movie streaming application using the MERN stack, incorporating React.js for the frontend, Node.js and Express.js for the backend, MongoDB Atlas as the database, and Mongoose as the ODM. Firebase was utilized for media file storage. The application features user authentication, allowing users to watch movies, while administrators can manage movies, users, and upload media content.",
		technologies: [
			"React Js",
			"Context API",
			"Node Js",
			"Express Js",
			"MongoDB",
			"Mongoose",
			"Firebase",
			"HTML",
			"CSS",
			"JavaScript",
		],
	},
	{
		title: "Admin Dashboard Web-App",
		image: projectImageArray_2,
		description:
			"The robust admin panel provides comprehensive control over the movie streaming platform. Administrators can efficiently manage user accounts, curate movie content by adding, editing, and deleting movies and their associated details. The platform also enables administrators to create and manage various movie lists, catering to different user preferences.",
		technologies: [
			"React Js",
			"Context API",
			"Node Js",
			"Express Js",
			"MongoDB",
			"Mongoose",
			"Firebase",
			"HTML",
			"CSS",
			"JavaScript",
		],
	},
];

export const CONTACT = {
	address: "265, Santoshi krupa Soc., Bapa Sitaram Chowk, Katargam, Surat.",
	phoneNo: "+91 9925082857",
	email: "yashambaliya266@gmail.com",
};
