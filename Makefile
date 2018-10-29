install:
	npm install

publish:
	npm publish

lint:
	npm run eslint

build:
	npm run build

start-gendiff:
	npm run babel-node -- src/bin/gendiff.js
