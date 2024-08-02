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

export const HERO_CONTENT = `I am a passionate frontend web developer with a keen eye for crafting robust and scalable web applications. With six months of hands-on experience in Vue.js and Vuex, I have developed a strong foundation in frontend development. Through self-directed learning, I have also gained proficiency in React.js and Redux, building upon my skills through personal practice projects. I am eager to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT =
	"I am a dedicated and versatile frontend web developer with a proven track record of building efficient and user-centric web applications. With 6 months of industry experience, I have honed my skills in Vue.js and React.js, and am also independently learning Node.js and Express.js, along with database technologies like MySQL and MongoDB. My passion for crafting exceptional digital experiences is fueled by a constant drive to explore and adopt new frameworks, tools, and best practices. I have a solid foundation in frontend development with Vue.js and React.js, and am capable of managing state with Vuex and Redux libraries. I am proficient in design libraries like Tailwind CSS and Bootstrap. My ability to effectively manage version control using Git and GitHub ensures seamless collaboration and project management. I thrive in fast-paced, collaborative environments and am eager to contribute my expertise to innovative projects.";

export const EXPERIENCES = [
	{
		year: "January-2024 - July-2024",
		role: "Frontend Web Developer",
		company: "Infinity Brains",
		description: `I was responsible for the entire frontend development of several social media-like web projects, including designing, API integration, data management, and bug fixing. My work spanned projects like Restroworld, a social media platform for restaurants, where I redesigned the posts feed and implemented payment gateways using CashFree and PayUMoney. Additionally, I completely redesigned their official website, Redjinni, ensuring responsiveness across devices and incorporating engaging animations using Animate.css on multiple projects.`,
		technologies: [
			"Vue.js",
			"Vuex",
			"Tailwind CSS",
			"Bootstrap",
			"Javascript",
			"HTML",
			"CSS",
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
