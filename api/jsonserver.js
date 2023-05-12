const { createServer } = require('http');
const { exec } = require('child_process');

const devServer = exec('npm run dev');
const jsonServer = exec('npm run jsonserver');

const server = createServer((req, res) => {
  // Aquí puedes agregar lógica adicional si es necesario
});

devServer.stdout.on('data', (data) => {
  console.log(data);
});

jsonServer.stdout.on('data', (data) => {
  console.log(data);
});

server.listen(process.env.DEV_SERVER_PORT, () => {
  console.log(`Dev server running on port ${process.env.DEV_SERVER_PORT}`);
});