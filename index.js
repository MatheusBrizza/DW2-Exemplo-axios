// run `node index.js` in the terminal
import axios from 'axios';

const url = 'https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks/';

async function buscarTodasTarefas() {
  const resultado = await axios.get(url);
  return resultado.data;
}

let resultado;

// resultado = await buscarTodasTarefas();

async function buscarPorUsuario(user) {
  const configs = {
    params: {
      user: user,
    },
  };
  const resultado = await axios.get(url, configs);
  return resultado.data;
}

//resultado = await buscarPorUsuario('seumathias');

async function inserirTarefa(user, description) {
  const DTO = {
    user: user,
    description: description,
  };

  const resultado = await axios.post(url, DTO);
  return resultado.data;
}
// resultado = await inserirTarefa('Melissa', 'Entregar exercício');

async function alterarTarefa(id, user, description) {
  const dto = {
    user: user,
    description: description,
  };

  const alterar = await axios.put(`${url}${id}`, dto);
  return alterar.data;
}

/* resultado = await alterarTarefa(
  'd3d64784-d290-49b5-8e19-3b918cd60a91',
  'Daniel',
  'e suas extensões de arquivo'
);*/

async function deletarTarefa(id) {
  const deletar = await axios.delete(`${url}${id}`);
  return deletar.data;
}
//resultado = await deletarTarefa('d3d64784-d290-49b5-8e19-3b918cd60a91');

async function deleteByUser(user) {
  const configs = {
    params: {
      user,
    },
  };
  const deletar = await axios.delete(url, configs);
}

inserirTarefa('Matheus', 'minha tarefa');

console.log(resultado);
