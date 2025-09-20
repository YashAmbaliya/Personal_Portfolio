/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const ProjectImageSlider = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3500);

		return () => clearInterval(intervalId);
	}, [images]);

	return (
		<>
			{typeof images == "string" ? (
				<img
					src={images}
					alt="Project-Image"
					className="rounded w-full h-[12rem] min-[530px]:h-auto lg:w-[93%] object-cover"
				/>
			) : (
				<img
					src={images[currentImageIndex]}
					alt="Project-Image"
					className="rounded w-full h-[12rem] min-[530px]:h-auto lg:w-[93%] object-cover"
				/>
			)}
		</>
	);
};

export default ProjectImageSlider;