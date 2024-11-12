/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitish: "#e8fbfe",
        bgDark: "#011e39",
        cloud: "#dbfafd",
        lightBlue: "#08c3cf",
        darkBlue: "#0f9db5",
        darkPink: "#af2958",
        lightPink: "#ff367e",
        yellowish: "#ffc604",
      },
    },
  },
  plugins: [],
};
