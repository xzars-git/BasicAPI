import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRouter);
app.get('/', (req, res) => res.send('Hello From Homepage'));
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
