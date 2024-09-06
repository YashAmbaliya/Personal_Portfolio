import { HERO_CONTENT } from "../constant";
import profileImage from "../assets/Personal_Photo_2.png";

import { motion } from "framer-motion";

const HeroComp = () => {
	const container = (delay) => ({
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.5, delay: delay },
		},
	});

	const cvPdfFile = `${window.location.origin}${window.location.pathname}/CV_1.pdf`;

	const downloadCV = () => {
		const link = document.createElement("a");
		link.href = cvPdfFile;
		link.setAttribute("download", "Yash_Ambaliya_Resume.pdf");
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	return (
		<>
			<div className="border-b border-neutral-900 pb-4 lg:mb-35">
				<div className="flex flex-wrap">
					<div className="w-full lg:w-1/2">
						<div className="flex flex-col items-center lg:items-start ">
							<motion.h1
								variants={container(0.5)}
								initial="hidden"
								animate="visible"
								className="pb-16 text-5xl md:text-7xl font-thin tracking-tight lg:mt-10 xl:text-8xl"
							>
								Yash Ambaliya
							</motion.h1>
							<motion.span
								variants={container(0.8)}
								initial="hidden"
								animate="visible"
								className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
							>
								Frontend Web Developer
							</motion.span>
							<motion.p
								variants={container(1.2)}
								initial="hidden"
								animate="visible"
								className="my-2 max-w-xl py-6 font-light text-base tracking-tighter"
							>
								{HERO_CONTENT}
							</motion.p>
							<motion.span
								variants={container(1.6)}
								initial="hidden"
								animate="visible"
								className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl mb-12 lg:mb-6 lg:text-2xl tracking-tight text-transparent border-b-2 border-neutral-700 cursor-pointer transition duration-200 ease-out hover:ease-in hover:text-neutral-400 hover:border-neutral-400"
								onClick={() => downloadCV()}
							>
								Get My Resume
							</motion.span>
						</div>
					</div>
					<div className="w-full lg:w-1/2 lg:p-8">
						<div className="flex justify-center">
							<motion.img
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, delay: 1.2 }}
								src={profileImage}
								className="w-auto xl:w-3/4 rounded-2xl mb-8 lg:mb-0"
								alt="Profile-Image"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroComp;
