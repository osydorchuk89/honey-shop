import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [react()],
        define: {
            "process.env.EMAILJS_SERVICE_ID": JSON.stringify(
                env.EMAILJS_SERVICE_ID
            ),
            "process.env.EMAILJS_TEMPLATE_ID": JSON.stringify(
                env.EMAILJS_TEMPLATE_ID
            ),
            "process.env.EMAILJS_PUBLIC_KEY": JSON.stringify(
                env.EMAILJS_PUBLIC_KEY
            ),
        },
    };
});
