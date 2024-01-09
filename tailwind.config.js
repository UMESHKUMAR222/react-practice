module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7e: "#ffffff7e", A700: "#ffffff" },
        black: {
          900: "#000000",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_63": "#00000063",
          "900_4c": "#0000004c",
          "900_a2": "#000000a2",
          "900_75": "#00000075",
          "900_99": "#00000099",
          "900_33": "#00000033",
          "900_19": "#00000019",
          "900_36": "#00000036",
        },
        gray: {
          50: "#faf9f9",
          200: "#ececec",
          300: "#e0dfde",
          900: "#012c20",
          "100_4c": "#f3f3f34c",
          "300_99": "#e0e0e099",
          "50_b2": "#faf9f9b2",
          "200_01": "#f0f0f0",
          "900_87": "#012c2087",
          "50_a2": "#faf9f9a2",
          "200_99": "#ececec99",
        },
        red: { 900: "#8c161d", A700_99: "#b3020299", A700: "#b30202" },
        green: { A700: "#02b31f" },
        teal: { 700: "#027e5b" },
        blue_gray: {
          100: "#d9d9d9",
          800: "#353b50",
          900: "#312b2c",
          "900_99": "#312b2c99",
          "900_33": "#312b2c33",
        },
        lime: { 900: "#aa662b" },
        yellow: { A700: "#ffd800" },
        orange: { 100: "#fcd3a1" },
      },
      backgroundImage: { gradient: "linear-gradient(167deg ,#fcd3a1,#aa662b)" },
      fontFamily: {
        poppins: "Poppins",
        lexenddeca: "Lexend Deca",
        inter: "Inter",
      },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "inset 0px 4px  12px 0px #00000033",
        bs3: "3.6px 2.4px  9px 0px #0000003f",
        bs2: "10px 4px  20px 0px #00000019",
      },
      textShadow: { ts: "3.6px 2.4px  9px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
