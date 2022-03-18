#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { pkgUp } from 'pkg-up'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(
    import.meta.url))

const module = "@dgtlmonk/fe-configs/tsconfig"

const TSCONFIG_JSON = `{
  "extends": "${module}",
  "exclude": [
    "node_modules/",
    "dist/",
    "tests/fixtures/",
  ],
}
`
const PRETTIER_JS = `module.exports = {
    ...require("@dgtlmonk/fe-configs/prettier.json"),
    semi: false,
};`



async function main() {
    const cwd = path.join(__dirname, '..', '..')
    const pkg = await pkgUp({ cwd })
    if (!pkg) {
        return 0
    }
    const pkgDir = path.dirname(pkg)

    const tsconfigFile = path.join(pkgDir, 'tsconfig.json')
    const prettierFile = path.join(pkgDir, '.prettierrc.js')

    if (!fs.existsSync(tsconfigFile)) {
        console.info(`${module}: auto generated ${tsconfigFile}`)
        fs.writeFileSync(tsconfigFile, TSCONFIG_JSON)
    }

    if (!fs.existsSync(prettierFile)) {
        console.info(`${module}: auto generated .prettierrc.js`)
        fs.writeFileSync(prettierFile, PRETTIER_JS)
    }

    return 0
}


main()
    .then(process.exit)
    .catch(e => {
        console.error(e)
        process.exit(1)
    })