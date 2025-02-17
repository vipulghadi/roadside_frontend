import tailwindcssAnimate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			primary: {
    				light: '#4f8a8b',
    				DEFAULT: '#28527a',
    				dark: '#1a3d5a'
    			},
    			secondary: {
    				light: '#f4a261',
    				DEFAULT: '#e76f51',
    				dark: '#d94827'
    			},
    			accent: {
    				light: '#ffcd38',
    				DEFAULT: '#ffb703',
    				dark: '#ff9e00'
    			},
    			background: '#f1faee',
    			text: '#1d3557',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		}
    	}
    },
    
    plugins: [tailwindcssAnimate],
  }