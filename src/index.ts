import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv';

dotenv.config();


// Configuração do app Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de Segurança
app.use(helmet()); // Configura cabeçalhos de segurança
app.use(cors()); // Permite controle sobre CORS

// Limitação de taxa de requisições
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita cada IP a 100 requisições por janela de tempo
});
app.use(limiter);

// Rota GET
app.get("/", (req: Request, res: Response) => {
  res.send("albicocche la sfida backend");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
