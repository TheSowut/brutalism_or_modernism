import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());

app.use(express.json());

app.get('/', (_: any, res: any) => {
    res.send('app running');
});

app.get('/test', (req: any, res: any) => res.json({ message: '/test' }));

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
