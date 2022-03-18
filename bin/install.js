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

const PRETTIER_JSON = `{
    "arrowParens": "avoid",
    "bracketSpacing": false,
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "printWidth": 100,
    "proseWrap": "always",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false
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
    const prettierFile = path.join(pkgDir, 'prettier.json')

    if (!fs.existsSync(tsconfigFile)) {
        console.info(`${module}: auto generated ${tsconfigFile}`)
        fs.writeFileSync(tsconfigFile, TSCONFIG_JSON)
    }

    if (!fs.existsSync(prettierFile)) {
        console.info(`${module}: auto generated prettier.json`)
        fs.writeFileSync(tsconfigFile, PRETTIER_JSON)
    }

    return 0
}


main()
    .then(process.exit)
    .catch(e => {
        console.error(e)
        process.exit(1)
    })