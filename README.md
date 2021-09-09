# ToDo App

A simple todo app using ReactJS and TailWindCSS

## How to config React App with TailWindCSS?

- Install tailwind with necessary stuffs :
  `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`

- Init tailwindcss :

  `npx tailwindcss-cli@latest init`

- Create a file named `craco.config.js` in root dir

  ```.js
  module.exports = {
  style: {
      postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
      },
  },
  };

  ```

- Change `index.css`

  ```.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
