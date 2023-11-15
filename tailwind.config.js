/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
      },

      screens: {
        md: "768px",
        lg: "900px",
      },
      fontSize: {
        sm: "9px",
        "2sm": "11px",
        "3sm": "12px",
        md: "13px",
        "2md": "14px",
        lg: "16px",
        "2lg": "18px",
        xl: "20px",
        "2xl": "26px",
      },
      colors: {
        dark: {
          100: "rgba(20, 23, 55, 1)",
          90: "rgba(20, 23, 55, .9)",
          80: "rgba(20, 23, 55, .8)",
          70: "rgba(20, 23, 55, .7)",
          60: "rgba(20, 23, 55, 0.6)",
          50: "rgba(20, 23, 55, 0.5)",
          40: "rgba(20, 23, 55, 0.4)",
          30: "rgba(20, 23, 55, 0.3)",
          20: "rgba(20, 23, 55, 0.2)",
          10: "rgba(20, 23, 55, 0.1)",
        },
        grey: {
          border: "rgba(228, 233, 239, 1)",
          bg: "rgba(245, 246, 250, 1)",
          disclaimer: "rgba(233, 238, 244, 1)",
          txt: "rgba(165, 180, 203, 1)",
          txt2: "rgba(125, 141, 167, 1)",
        },
        blue: {
          100: "rgba(0, 106, 255, 1)",
        },
        red: {
          100: "rgba(255, 103, 116, 1)",
        },
        white: {
          100: "rgba(255, 255, 255, 1)",
        },
      },
    },
  },
  plugins: [],
};
