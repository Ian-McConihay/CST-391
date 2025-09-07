// Import express types + default export
import express from 'express';
import type { Request, Response } from 'express';

const app = express();          // Create an Express app instance
const port = 3000;              // Port the server will listen on

// Define the root route: GET /
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from TypeScript!'); // Send a simple response
});

// Start the HTTP server and log the URL
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});