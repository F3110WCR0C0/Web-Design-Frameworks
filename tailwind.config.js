// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,ts,jsx,tsx}', // Make sure the paths are correct for your HTML/JS files
    ],
    theme: {
      extend: {
        colors: {
          'brand': '#fffff',        // Custom brand color
          'brand-600': '#2563eb',    // Custom brand-600 color
          'brand-700': '#1e40af',    // Custom brand-700 color
        },
        fontFamily: {
          'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          'serif': ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        },
      },
    },
    plugins: [],
  };