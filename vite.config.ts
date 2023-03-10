import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig((conf) => {
    var outDir = conf.mode === 'development' ? 'dist' : 'build'
    return {
        server: {
            open: true,
        },
        preview: { port: 3000 },
        plugins: [
            react(),
            checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }),
            tsconfigPaths(),
            svgr(),
            // build time
            // 23s - with
            // 43 - without
            legacy({
                targets: ['IE >= 11'],
            }),
            splitVendorChunkPlugin(),
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
