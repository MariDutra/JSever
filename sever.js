const jsonSever = require('json-sever');
const sever = jsonSever.create();
const router = jsonSever.router('db.json');
const middlewares = jsonSever.defaults();

const port = process.env.PORT || 8080;

sever.use(middlewares);
sever.use(router);
sever.listen(port, () => {
    //eslint-disable-next-line no console
    console.log(`JSON Sever está funcionando na porta ${port}`);
})