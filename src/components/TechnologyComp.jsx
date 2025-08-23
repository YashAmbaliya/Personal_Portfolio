// import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
// import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";

import { motion } from "framer-motion";

const TechnologyComp = () => {
	const iconVariant = (duration) => ({
		initial: { y: -10 },
		animate: {
			y: [10, -10],
			transition: {
				duration: duration,
				ease: "linear",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	});

	return (
		<>
			<div className="border-b border-neutral-900 pb-24">
				<motion.h1
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -100 }}
					transition={{ duration: 1.5 }}
					className="my-20 text-center text-4xl"
				>
					Technologies
				</motion.h1>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1.5 }}
					className="flex flex-wrap items-center justify-center gap-4"
				>
					{/* <motion.div
						variants={iconVariant(2.5)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
					>
						<RiReactjsLine className="text-7xl text-cyan-400" />
					</motion.div> */}
					<motion.div
						variants={iconVariant(3.3)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
					>
						<FaVuejs className="text-7xl text-green-600" />
					</motion.div>
					<motion.div
						variants={iconVariant(3.3)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
					>
						<SiNuxtdotjs className="text-7xl text-green-600" />
					</motion.div>
					{/* <motion.div
						variants={iconVariant(5)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
					>
						<SiRedux className="text-7xl text-purple-600" />
					</motion.div> */}
					<motion.div
						variants={iconVariant(6.1)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
					>
						<RiTailwindCssFill className="text-7xl text-cyan-500" />
					</motion.div>
					<motion.div
						variants={iconVariant(4)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
					>
						<FaBootstrap className="text-7xl text-purple-600" />
					</motion.div>
					<motion.div
						variants={iconVariant(2)}
						initial="initial"
						animate="animate"
						className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
					>
						<FaNodeJs className="text-7xl text-green-500" />
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default TechnologyComp;
