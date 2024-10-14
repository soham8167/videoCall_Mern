module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

