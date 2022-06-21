import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    server: {
        open: true,
    },
    plugins: [
        react(),
        checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
        tsconfigPaths(),
        svgr(),
        legacy({
            targets: ['IE >= 11'],
        }),
        babel({ plugins: ['effector/babel-plugin'] }),
    ],
})
