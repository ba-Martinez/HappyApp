import express from 'express';
//import './database/connection'; // Senão nunca conecta com o banco

import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

// A bilbioteca cors é para permitir acesso para todos os front ends
app.use(cors());
// Por padrão o express não entende o json, então temos que fazer o seguinte
// Como se tivesse aplicando um plugin no meu app
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Servidor requisição/resposta
// vamos acessar por localhost:3333
app.listen(3333, () => {
  console.log('O server tá ON 😎🚀');
})

// Rota = conjunto
// Recurso = usuario
// Metodo HTTP = GET, POST, PUT, DELETE
// GET = Buscando uma informacao (lista, item)
// POST = Criando uma informacao
// PUT = Editando uma informacao
// DELETE = deletando uma informação
// Parametros 
// Query Params http://localhost:3333/users?search=luiz
// Route Params http://localhost:3333/users/1  (identificar um recurso) quando queremos editar ou apagar o users com id=1
// ex:app.put('/users/:id', function (request,response) {
// Body http://localhost:3333/users quando queremos enviar muitos dados, dados de formularios, etc
// app.post('/users/:id', (request,response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);
//     return response.json({message: 'Hello World'});
// });


// Banco de dados pode ser de tres tipos
// Driver nativo, vc faz query diretor
// Query Buider (faz no javascript com objeto)
// ORM Object Relational Mapping (mapeando cada tabela com classe javascript)