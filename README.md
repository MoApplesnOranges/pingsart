# pingsart

1. index.html
<div id="root">not rendered</div>
<script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
<script type="module" src="./src/App.js"></script>
2. const App = () => {
   return React.createElement("div", {}, [
   React.createElement("h1", {}, "Adopt Me!"),
   React.createElement(Pet, {
   name: "Luna",
   animal: "Dog",
   breed: "Havanese",
   }),
   React.createElement(Pet, {
   name: "Pepper",
   animal: "Bird",
   breed: "Cockatiel",
   }),
   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
   ]);
   };

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

3. npx serve "brings it to localhost:3000"
4. npm
5. npm install -D vite@latest @vitejs/plugin-react@latest
6. npm i react@latest react-dom@latest
7. "scripts": {
   "build": "vite build",
   "dev": "vite",
   "preview": "vite preview",
   "test": "echo \"Error: no test specified\" && exit 1"
   },
8. Delete two <scripts> from index.html
9. create vite.config.js file and add this
   import { defineConfig, transformWithEsbuild } from "vite";
   import react from "@vitejs/plugin-react";

export default defineConfig({
base: "/",
plugins: [
{
name: "treat-js-files-as-jsx",
async transform(code, id) {
if (!id.match(/src\/.\*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),

],
build: {
commonjsOptions: {
transformMixedEsModules: true,
},
},
optimizeDeps: {
force: true,
esbuildOptions: {
loader: {
".js": "jsx",
},
},
},
});

10.
