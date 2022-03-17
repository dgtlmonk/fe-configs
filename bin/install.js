#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { pkgUp } from 'pkg-up'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(
    import.meta.url))

const module = "@dgtlmonk/fe-configs/tsconfig"

const TSCONFIG_JSON_CONTENT = `{
  "extends": ${module},
  "compilerOptions": {
    "outDir": "dist",
  },
  "exclude": [
    "node_modules/",
    "dist/",
    "tests/fixtures/",
  ],
}
`

async function main() {
    const cwd = path.join(__dirname, '..', '..')
    const pkg = await pkgUp({ cwd })
    if (!pkg) {
        return 0
    }
    const pkgDir = path.dirname(pkg)

    const tsconfigFile = path.join(pkgDir, 'tsconfig.json')

    if (!fs.existsSync(tsconfigFile)) {
        console.info(`${module}: auto generated ${tsconfigFile}`)
        fs.writeFileSync(tsconfigFile, TSCONFIG_JSON_CONTENT)
    }
    return 0
}

main()
    .then(process.exit)
    .catch(e => {
        console.error(e)
        process.exit(1)
    })