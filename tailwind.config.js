/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  jit:true,
  darkMode:"class",
  theme: {
    extend: {
      // ...
      spacing: {
        '1/2': '50%',
      },
      // 추가할 클래스
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      perspective: {
        none: 'none',
        '1k': '1000px',
      },
    },
  },
  variants: {
    extend: {
      // ...
      backfaceVisibility: ['group-hover'],
      perspective: ['group-hover'],
    },
  },
  plugins: [require("tailwindcss-animated"),
  ],
 
}

