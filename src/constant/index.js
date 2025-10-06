import project2_1 from "../assets/project_img_2_1.png";

import projectImg1 from "../assets/latest/project_img_1.png";
import projectImg2 from "../assets/latest/project_img_2.png";

export const HERO_CONTENT = `I am a passionate frontend web developer with 1.5+ years of experience, including six months of training and internship, focused on crafting robust and scalable web applications. With hands-on expertise in Vue.js, Nuxt.js, and Vuex, I have built a strong foundation in frontend development, while also gaining knowledge of React.js and Redux through practice projects. Skilled in Tailwind CSS, Bootstrap, Material UI, Nuxt UI, and Vuetify, I enjoy building reusable components and writing clean, optimized code. I am eager to keep learning new technologies and contribute to innovative solutions that enhance user experience and drive business growth.`;

export const ABOUT_TEXT =
	"I am a dedicated Frontend Developer with 1.5+ years of experience, including 6 months of training and internship, focused on building scalable and user-centric web applications. Skilled in Vue.js, Nuxt.js, and familiar with React.js and Redux, I have a strong foundation in modern JavaScript, state management, and rendering strategies (CSR/SSR). I am proficient with UI frameworks like Tailwind CSS, Bootstrap, Material UI, and Vuetify, and experienced in creating reusable components and optimized code. With expertise in debugging, DOM manipulation, and API integration, I thrive in collaborative environments and continuously explore new tools and practices to deliver efficient, high-quality solutions.";

// Experienced data
export const EXPERIENCES = [
	{
		year: "August-2024 - September-2025",
		role: "Frontend Developer",
		company: "Galaxy Infotech, Udhana, Surat, Gujarat",
		description: `Galaxy Infotech is a software development company that delivers custom solutions for web applications, commercial platforms, and ERP systems. We work with frontend technologies such as Vue.js, Nuxt.js, and others as per project needs, while backend development is powered by .NET technologies. In my role, I focus on building responsive user interfaces, integrating APIs, and implementing state management with Pinia to create seamless, high-quality web solutions across diverse projects and domains.\n
		- Modelrecs: A social media platform for models and modeling enthusiasts, enabling users to upload photos and videos, interact through posts, comments, likes, shares, and follow other models. The project is currently under development.\n
		- NOURI'AH: A fully responsive web platform for chefs and restaurants to create dynamic, SEO-friendly live menus with a CMS for managing and publishing content. Menus are optimized for Google search visibility and tailored for restaurants, chefs, and food truck owners.`,
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

// Project data
export const PROJECTS = [
	{
		title: "Modelrecs",
		image: projectImg2,
		description:
			"A social media platform designed for models and modeling enthusiasts. The platform enables users to upload photos and videos to showcase their passion for modeling. It includes core social features such as post creation, comments, likes, and shares, along with the ability to follow models and engage with their content. The project is currently under development and aims to foster a creative community for modeling enthusiasts.",
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Vue Js 3",
			"Nuxt Js 3",
			"Pinia Store",
			"Tailwind CSS",
			"Material Tailwind",
			"Nuxt UI",
		],
	},
	{
		title: "Nouriah",
		image: projectImg1,
		description:
			"A web project with a fully responsive user interface and customized components. The main goal is to provide a facility for chefs and restaurants to create live, dynamic food menus. Menus are fully dynamic with on-page SEO implementation for better visibility. Includes a CMS for users to create, update, and publish menus on the same domain. Published menus are searchable on Google, making them easily discoverable. Menu themes are tailored for chefs, restaurants, and food truck owners who want their menus live and accessible online.",
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"Vue Js 3",
			"Nuxt Js 3",
			"Pinia Store",
			"Tailwind CSS",
			"Material Tailwind",
		],
	},
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
];

// Contact data
export const CONTACT = {
	address: "265, Santoshi krupa Soc., Bapa Sitaram Chowk, Katargam, Surat.",
	phoneNo: "+91 9925082857",
	email: "yashambaliya266@gmail.com",
};
