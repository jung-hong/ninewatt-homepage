import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-scroll": "linear-gradient(90deg, #1A1A1A 0%, #1A1A1A 50%, transparent 50.1%)",
      },
      width: {
        layoutWidth: "1240px",
      },
      maxWidth: {
        layoutWidth: "1240px",
      },

      fontSize: {
        // === Display ===
        "display-01": ["80px", { lineHeight: "120%", letterSpacing: "0%", fontWeight: 700 }],
        "display-01-mo": ["40px", { lineHeight: "120%", letterSpacing: "0%", fontWeight: 700 }],

        "display-02": ["56px", { lineHeight: "140%", letterSpacing: "0%", fontWeight: 700 }],
        "display-02-mo": ["30px", { lineHeight: "140%", letterSpacing: "0%", fontWeight: 700 }],

        "display-03": ["44px", { lineHeight: "140%", letterSpacing: "0%", fontWeight: 700 }],
        "display-03-mo": ["26px", { lineHeight: "140%", letterSpacing: "0%", fontWeight: 700 }],

        // === Heading ===
        "heading-01": ["36px", { lineHeight: "150%", fontWeight: 600 }],
        "heading-01-mo": ["24px", { lineHeight: "150%", fontWeight: 600 }],

        "heading-02": ["28px", { lineHeight: "150%", fontWeight: 600 }],
        "heading-02-mo": ["20px", { lineHeight: "150%", fontWeight: 600 }],

        "heading-03": ["24px", { lineHeight: "150%", fontWeight: 600 }],
        "heading-03-mo": ["18px", { lineHeight: "150%", fontWeight: 600 }],

        "heading-04": ["20px", { lineHeight: "150%", fontWeight: 600 }],
        "heading-04-mo": ["16px", { lineHeight: "150%", fontWeight: 600 }],

        "heading-05": ["18px", { lineHeight: "150%", fontWeight: 600 }],
        "heading-05-mo": ["16px", { lineHeight: "150%", fontWeight: 600 }],

        // === Body ===
        "body-01": ["24px", { lineHeight: "160%", fontWeight: 400 }],
        "body-01-mo": ["17px", { lineHeight: "160%", fontWeight: 400 }],

        "body-02": ["20px", { lineHeight: "160%", fontWeight: 400 }],
        "body-02-mo": ["16px", { lineHeight: "160%", fontWeight: 400 }],

        "body-03": ["18px", { lineHeight: "160%", fontWeight: 400 }],
        "body-03-mo": ["14px", { lineHeight: "160%", fontWeight: 400 }],

        // === Caption ===
        "caption-01": ["16px", { lineHeight: "160%" }],
        "caption-01-mo": ["14px", { lineHeight: "160%" }],

        "caption-02-600": ["14px", { lineHeight: "160%", fontWeight: 600 }],
        "caption-02-600-mo": ["12px", { lineHeight: "160%", fontWeight: 600 }],
        "caption-02-400": ["14px", { lineHeight: "160%", fontWeight: 400 }],
        "caption-02-400-mo": ["12px", { lineHeight: "160%", fontWeight: 400 }],

        "caption-03": ["12px", { lineHeight: "160%", fontWeight: 400 }],
        "caption-03-mo": ["12px", { lineHeight: "160%", fontWeight: 400 }],
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black9: "#999",
        ninewatt: "#307481",
        strong: "#000000",
        neutral: "#2E2F33E0",
        neutral40: "#5C5C5C",
        alternative: "#37383C9C",
        assistive: "#37383C47",
        "neutral-90": "#C4C4C4",
        redOrange40: "#C94A00",

        "primary-50": "#ECF6F8",
        "primary-200": "#85D2E0",
        "primary-300": "#49B6CA",
        "primary-400": "#3896A8",
        "primary-500": "#307481",
        "primary-600": "#275E68",

        gray50: "#F7F7F8",
        gray100: "#EFEFF0",
        gray200: "#E2E2E4",
        gray300: "#D1D2D6",
        gray400: "#C4C5CA",
        gray500: "#94969E",
        gray600: "#6D6F79",
        gray700: "#55565E",
        gray800: "#36373A",
        gray900: "#18191B",
        "common-white": "#FFFFFF",
        "common-black": "#000000",
      },
      boxShadow: {
        emphasize: [
          "0px 2px 8px rgba(0, 0, 0, 0.12)",
          "0px 1px 4px rgba(0, 0, 0, 0.08)",
          "0px 0px 1px rgba(0, 0, 0, 0.08)",
        ],
      },
      textShadow: {
        DEFAULT: "0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
      dropShadow: {
        emphasize: [
          "0px 2px 8px rgba(0, 0, 0, 0.12)",
          "0px 1px 4px rgba(0, 0, 0, 0.08)",
          "0px 0px 1px rgba(0, 0, 0, 0.08)",
        ],
      },
      padding: {
        15: "3.75rem",
      },
      keyframes: {
        bounceFadeout: {
          "0%, 100%": {
            opacity: "0",
          },
          "50%": {
            "-webkit-transform": "translateY(-6px)",
            "-moz-transform": "translateY(-6px)",
            "-ms-transform": "translateY(-6px)",
            transform: "translateY(-6px)",
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        bounceFade: "bounceFadeout 2s ease-in infinite",
        fadeIn: "fadeIn 2s ease-in",
        fade: "fadeIn 0.8s ease-in-out",
      },
      screens: {
        xs: "310px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    scrollbarHide,
  ],
} satisfies Config;
