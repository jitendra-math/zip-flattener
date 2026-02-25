import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	
	// Server settings (Optional but good to have)
	server: {
		port: 3000,
		strictPort: false,
	},

	// Optimization for heavy libraries
	optimizeDeps: {
		include: ['jszip', 'file-saver']
	}
});
