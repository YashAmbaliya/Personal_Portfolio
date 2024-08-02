import logoImg from "../assets/logo_img_2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const NavbarComp = () => {
	const redirectToLink = (url) => {
		window.location.href = url;
	};
	return (
		<>
			<nav className=" mb-20 flex items-center justify-between py-6">
				<div className="flex flex-shrink-0 items-center cursor-pointer">
					<img
						className="mx-2 w-10 sm:w-12 transition duration-200 ease-out hover:ease-in hover:scale-125"
						src={logoImg}
						alt="LogoImage"
					/>
				</div>
				<div className="m-8 flex items-center justify-center gap-4 text-3xl">
					<FaLinkedin
						className="cursor-pointer transition duration-200 ease-out hover:ease-in hover:scale-125 hover:text-cyan-600"
						onClick={() =>
							redirectToLink("https://www.linkedin.com/in/yash-ambaliya")
						}
					/>
					<FaGithub
						className="cursor-pointer transition duration-200 ease-out hover:ease-in hover:scale-125 hover:text-purple-600 hover:shadow-[60px 5px 10px rgba(147 51 234, 0.3)]"
						onClick={() => redirectToLink("https://github.com/YashAmbaliya")}
					/>
				</div>
			</nav>
		</>
	);
};

export default NavbarComp;
