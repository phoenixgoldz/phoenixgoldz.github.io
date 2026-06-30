import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    "*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["Orbitron", "var(--font-orbitron)", "Inter", "sans-serif"],
      },
      colors: {
        // Existing shadcn-style tokens, kept for compatibility.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          primary: "#ffb347",
          secondary: "#ff7e5f",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // PhoenixGold portfolio tokens.
        phoenix: {
          navy: "#0f172a",
          slate: "#1e293b",
          gold: "#ffb347",
          ember: "#ff7e5f",
          flame: "#ff5f3d",
        },

        // Eucalyptus Edge / Verdantia tokens.
        verdantia: {
          forest: "#1f7a4d",
          leaf: "#42d17a",
          crystal: "#49f2b1",
          river: "#38c7d8",
          gold: "#d6a84f",
        },

        blight: {
          purple: "#6d28d9",
          magenta: "#d946ef",
          violet: "#8b5cf6",
          shadow: "#16051f",
        },
      },
      backgroundImage: {
        "phoenix-gradient": "linear-gradient(135deg, #ffb347 0%, #ff7e5f 55%, #ff5f3d 100%)",
        "verdantia-gradient": "linear-gradient(135deg, #1f7a4d 0%, #42d17a 55%, #49f2b1 100%)",
        "blight-gradient": "linear-gradient(135deg, #16051f 0%, #6d28d9 55%, #d946ef 100%)",
        "hero-vignette": "linear-gradient(rgba(10, 15, 30, 0.45), rgba(10, 15, 30, 0.84))",
      },
      boxShadow: {
        phoenix: "0 0 30px rgba(255, 179, 71, 0.35)",
        verdantia: "0 0 30px rgba(73, 242, 177, 0.28)",
        blight: "0 0 30px rgba(217, 70, 239, 0.32)",
        card: "0 20px 30px rgba(0, 0, 0, 0.22)",
      },
      borderRadius: {
        lg: "var(--radius, 1rem)",
        md: "calc(var(--radius, 1rem) - 2px)",
        sm: "calc(var(--radius, 1rem) - 4px)",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.65", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.25)" },
        },
        borderPulse: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2.4s ease-in-out infinite",
        "border-pulse": "borderPulse 2s linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
