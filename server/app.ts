import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 8080;

const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(cors());

app.use(express.json());

app.get('/', (_: any, res: any) => {
    res.send('app running');
});

app.post('/recognize', upload.single('image'), (req: any, res: any) => {
    const image = req.file;
    const base64Image = image.buffer.toString('base64');

    const processedImage = {
        originalImage: image.originalname,
        size: image.size,
        mimetype: image.mimetype,
        base64Image: base64Image
    }
    res.json({ file: processedImage });
});

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
