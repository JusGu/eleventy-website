module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.js',
    './src/**/*.svg',
    './src/**/*.md',
  ],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Menlo", "Meslo LG", monospace;',
      },
    },
  }
};
