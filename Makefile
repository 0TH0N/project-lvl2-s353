install:
	npm install

publish:
	npm publish

lint:
	npx eslint .

build:
	rm -rf dist
	npm run build

test:
	npm run test

start-gendiff:
	npx babel-node -- src/bin/gendiff.js
