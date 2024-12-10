import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {name} from './package.json'

export default defineConfig({
  base: `/${name}`,
  plugins: [react()],
})
