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

await client.quit();
