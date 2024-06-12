import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {port: 3000, host: "localhost"},
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  plugins: [react()],
});
