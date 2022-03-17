# tsconfig

> Ideal [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for Perkd frontend projects 

## Install

```
$ npm install --save-dev @dgtlmonk/fe-tsconfig
```

## Usage & Configuration

`tsconfig.json`

```json
{
  "extends": "@dgtlmonk/fe-configs/tsconfig"
}
```

When you are targeting a higher browser support, check the relevant ECMAScript version and add it as `target`:

```json
{
	"extends": "@perkd/fe-configs/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
		"target": "ESNext"
	}
}
```

`.eslintrc`

```bash
ln -s node_modules/@dgtlmonk/fe-configs/eslint/.eslintrc
```