/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4CA2A8",
          "secondary": "#D3D4D9",
          "accent": "#EC615B",
          "neutral": "#0d0902",
          "base-100": "#EBEBEB",
          "info": "#00ccff",
          "success": "#FFD167",
          "warning": "#ec6b00",
          "error": "#ff6072",
        },
      }
    ]
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("daisyui")
  ]
  ,
}

