import { createClient } from "redis";

const client = createClient();

client.on('error', err => console.log('Erro no Redis', err));

await client.connect();

// SET
await client.set('username', 'aurigabriel');

// GET
const user = await client.get('username');
console.log('Usuário:', user);

// DEL
await client.del('username');

// INCR (contador)
await client.set('visitas', 0);
await client.incr('visitas');
await client.incr('visitas');
console.log('Visitas:', await client.get('visitas'));

// TTL - Cache com expiração
await client.set('token', 'abc123', {
  EX: 10,
});

// Adiciona itens no início
await client.lPush('tarefas', 'limpar');
await client.lPush('tarefas', 'estudar');
await client.lPush('tarefas', 'dormir');

// Mostra toda a lista
const tarefas = await client.lRange('tarefas', 0, -1);
console.log(tarefas); // ['dormir', 'estudar', 'limpar']

// Remove o último item
const ultima = await client.rPop('tarefas');
console.log('Removido:', ultima);


await client.quit();
