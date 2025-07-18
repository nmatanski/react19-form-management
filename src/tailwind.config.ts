import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            boxShadow: {
                'cyan-glow': 'var(--shadow-cyan)',
                'pink-glow': 'var(--shadow-pink)'
            }
        },
    },
    plugins: [],
};

export default config;
