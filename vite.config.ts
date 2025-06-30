import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    // root: process.cwd(),                // if you need to customize your root
    cacheDir: "node_modules/.vite_cache", // faster incremental builds

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // simplify imports
      },
    },

    plugins: [
      react({
        // use SWC for TSX/JSX transforms in production for extra speed
        jsxRuntime: "automatic",
        // you can enable babelOnly: true to always go through Babel
      }),
      tailwindcss(),
    ],

    build: {
      target: "es2020", // modern JS output
      outDir: "dist",
      assetsDir: "assets",
      cssCodeSplit: true, // split CSS per chunk
      sourcemap: isProd ? false : true,
      minify: isProd ? "esbuild" : false, // esbuild is fastest; switch to 'terser' for smaller but slower builds
      brotliSize: false, // skip brotli sizes to speed up CI

      rollupOptions: {
        output: {
          manualChunks: {
            // split vendor libs out
            react: ["react", "react-dom", "react-router-dom"],
          },
          chunkFileNames: isProd
            ? "assets/js/[name]-[hash].js"
            : "assets/js/[name].js",
          entryFileNames: isProd
            ? "assets/js/[name]-[hash].js"
            : "assets/js/[name].js",
          assetFileNames: ({ name }) => {
            if (/\.(css)$/.test(name!)) {
              return isProd
                ? "assets/css/[name]-[hash][extname]"
                : "assets/css/[name][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },

      // Speed up build on CI by disabling dynamic import warnings
      chunkSizeWarningLimit: 2000,
    },

    server: {
      port: 3000,
      strictPort: true,
      open: true,
      fs: {
        // Allow serving files from one level up to the project root
        allow: [".."],
      },
    },

    optimizeDeps: {
      include: ["lodash-es", "axios"], // pre-bundle these for faster dev startup
      esbuildOptions: {
        // reduce bundle size by dropping console.logs in production
        define: {
          "process.env.NODE_ENV": JSON.stringify(mode),
        },
        // drop debug in prod
        drop: isProd ? ["console", "debugger"] : [],
      },
    },

    // Turn on build analysis if needed
    // Uncomment to analyze bundle size after build
    // plugins: [..., require('rollup-plugin-visualizer')({ open: true })],
  };
});