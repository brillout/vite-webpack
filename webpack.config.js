import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default {
  entry: {
    main: join(__dirname, 'dist', 'client', 'assets', 'entry-client-routing.d825006b.js')
  },
  mode: 'development',
  output: {
    path: join(__dirname, 'dist-webpack'),
    filename: '[name].mjs'
  }
}
