/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#bdc3c7",
      },
      boxShadow: {
        "sh-1": "10px 10px 15px #a8aeb1, -10px -10px 15px #d2d8dd",
        "sh-2": "inset 13px 13px 28px #9fa4a7, inset -13px -13px 28px #dbe2e7",
      },
      animation: {
        tada: "tada 1.5s ease infinite",
        fada: "fada 1.5s ease-in-out infinite",
      },
      keyframes: {
        tada: {
          "0%, 100%": { transform: "scale(1)" },
          "10%, 20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%, 50%, 70%, 90%": { transform: "scale(1.1) rotate(3deg)" },
          "40%, 60%, 80%": { transform: "scale(1.1) rotate(-3deg)" },
        },
        fada: {
          "0%, 100%": { opacity: "0.5", transform: "scale(.5)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
