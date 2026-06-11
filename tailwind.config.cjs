/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Cinematic dark base (Richard Mattka)
        ink: {
          900: "#08070b",
          800: "#0b0a0f",
          700: "#111017",
          600: "#17151f",
          500: "#211e2c",
        },
        // Warm cream / soft light (Pola)
        cream: {
          50: "#faf7f2",
          100: "#f5f1ea",
          200: "#e9e2d6",
          300: "#c9c1b4",
        },
        // Iridescent pastel accents (Blobmixer)
        iris: {
          lilac: "#b9a7ff",
          blush: "#ff9fc4",
          peach: "#ffc8a2",
          mint: "#a8ecd0",
          sky: "#9fd6ff",
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(185,167,255,0.45)",
        soft: "0 30px 80px -40px rgba(0,0,0,0.8)",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 48s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
