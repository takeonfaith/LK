import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig((conf) => {
    var outDir = conf.mode === 'development' ? 'dist' : 'build'
    return {
        server: {
            open: true,
            port: 3000
        },
        preview: { port: 3000 },
        plugins: [
            react(),
            tsconfigPaths(),
            svgr(),
            splitVendorChunkPlugin(),
            checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
        ],
        build: {
            outDir,
            manifest: true,
        },
        esbuild: {
            logOverride: { 'this-is-undefined-in-esm': 'silent' },
        },
    }
})
