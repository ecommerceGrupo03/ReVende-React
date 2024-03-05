/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			'2md': '868px',
			// => @media (min-width: 868px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
