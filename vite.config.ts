import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        react(),
        checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
        tsconfigPaths(),
        svgr(),
    ],
})
