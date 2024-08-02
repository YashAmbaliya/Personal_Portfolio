/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		boxShadow: {
			// Custom drop shadow definitions (replace with your desired values)
			custom1: "0 35px 35px rgba(225, 0, 0, 0.25)",
			custom2: "inset 5px 5px 10px rgba(0, 0, 0, 0.1)", // Inner shadow example
			custom3: "0px 5px 10px rgba(0, 204, 0, 0.3)", // Green shadow example
		},
	},
	plugins: [],
};
