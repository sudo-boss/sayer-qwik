import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), 
      tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    css: {
      modules: {
        // Esta es la configuración clave para personalizar cómo se generan los identificadores locales
        generateScopedName: (name) => {
          return name;
        }
      },
      preprocessorOptions: {
        scss: {
          // Configuración para incluir rutas. Esto es equivalente al `includePaths` en tu configuración de Next.js.
          includePaths: [path.resolve(__dirname, 'src/styles')]
        }
      }
    },
    define: {
    },
    resolve: {
      alias: {
        '@node_modules': './node_modules',
        '@src': './src',
      }
   },
  };
});
