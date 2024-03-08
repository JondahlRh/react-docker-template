import react from "@vitejs/plugin-react";
import { UserConfigFnObject, loadEnv } from "vite";

// https://vitejs.dev/config/
const userConfig: UserConfigFnObject = ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      watch: { usePolling: true },
      host: true,
      port: +env.VITE_INTERNAL_PORT,
    },
  };
};

export default userConfig;
