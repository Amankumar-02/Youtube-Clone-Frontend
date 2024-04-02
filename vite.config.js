import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000/api/v1'
    }
  }
  // server: {
  //   proxy: {
  //     '/api': 'https://nervous-newt-purse.cyclic.app/api/v1'
  //   }
  // }
})
