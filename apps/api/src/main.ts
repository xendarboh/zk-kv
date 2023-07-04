import express from 'express';
import cors from 'cors';
import { expressHandleTRPCRequest } from '@zk-kv/trpc';

const host = process.env.API_HOST ?? 'localhost';
const port = process.env.API_PORT ? Number(process.env.API_PORT) : 3001;

const app = express();

// CORS
app.use(cors());
app.options('*', cors());

app.get('/', (_req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/api', expressHandleTRPCRequest());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
