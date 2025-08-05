import { createClient } from "redis";

const client = createClient();

client.on('error', err => console.log('Erro no Redis', err));

await client.connect();

await client.set('username', 'auri-gabriel');
const value = await client.get('username');
console.log(value);

await client.quit();
