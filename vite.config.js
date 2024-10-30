import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/GuardiansOfFinance/', // adaugă această linie
    plugins: [react()],
    build: {
        sourcemap: true,
    },
});
