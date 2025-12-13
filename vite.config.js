import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use root path for dev, GitHub Pages path for production
  base: command === "serve" ? "/" : "/3D-Portfolio/",
  plugins: [tailwindcss(), react()],

  // Asset handling optimizations
  assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.hdr"],

  build: {
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          three: ["three"],
          "react-three": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          gsap: ["gsap", "@gsap/react"],
          vendor: ["react", "react-dom"],
        },
      },
    },

    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
}));
