import express, { Express, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();
const PORT: number = Number(process.env.PORT) || 3000;
const FRONTEND_PATH = process.env.FRONTEND_BUILD_PATH || path.join(__dirname, '../../frontend/dist');

// Parse JSON bodies
app.use(express.json());

// API endpoints
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.get('/api/example', (_req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve static files from the React dist directory
app.use(express.static(FRONTEND_PATH));

// Handle all other routes by serving the React app
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(FRONTEND_PATH, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving frontend from: ${FRONTEND_PATH}`);
}); 