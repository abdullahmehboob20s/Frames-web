module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: "'Orbitron', sans-serif",
      body: "'DM Sans', sans-serif",
      "fira-sans": "'Fira Sans', sans-serif",
      vidaloka: "'Vidaloka', serif",
      roboto: "'Roboto', sans-serif",
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
      colors: {
        background: "#2D3044",
        customRed: "#CD123D",
        mahron: "#CD123D",
        darkBlack: "#1A1B1C",
        grayBlue: "#2D3044",
      },
      backgroundImage: {
        "yellow-red-gradient":
          "linear-gradient(260.08deg, #CD123D 40.54%, #FFA903 85.61%)",

        "bg-red-yellow": "linear-gradient(180deg, #CD123D 0%, #FFA903 100%);",
      },
    },
  },
  variants: {
    extend: {},
  },
};
