## Express installieren

`npm i express`

## Ein express projekt erstellen, mit .gitignore, .env, express und bodyparser

```
&& npm install express body-parser eslint \
&& mkdir src \
&& touch .gitignore .env .env.template ./src/index.js \
&& echo "/node_modules" >> .gitignore \
&& echo ".env" >> .gitignore \
&& sed -i "8i \    ,\"start\":\"node ./src/index.js\"," package.json \
&& sed -i "9i \    \"start:dev\":\"nodemon ./src/index.js\"" package.json
```

danach bitte meine .eslintrc.json datei runterladen und in das projekt ziehen.
