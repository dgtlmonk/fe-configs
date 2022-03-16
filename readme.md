# tsconfig

> Ideal [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for Perkd frontend projects 

## Install

```
$ npm install --save-dev @perkd/fe-tsconfig
```

## Usage

`tsconfig.json`

```json
{
	"extends": "@perkd/fe-tsconfig/tsconfig.json",
	"compilerOptions": {
		"outDir": "dist"
	}
}
```

When you are targeting a higher browser support, check the relevant ECMAScript version and add it as `target`:

```json
{
	"extends": "@perkd/fe-tsconfig/tsconfig.json",
	"compilerOptions": {
		"outDir": "dist",
		"target": "ESNext"
	}
}
```