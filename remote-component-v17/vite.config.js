import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "RemoteComponent",
      fileName: (format) => `remote-component.${format}.js`,
      formats: ["system"],
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          ["react-dom"]: "ReactDOM",
        },
      },
    },
  },
});
