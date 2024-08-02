import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/personal_portfolio/dist/",
	plugins: [react()],
	server: {
		port: 9023,
	},
});
