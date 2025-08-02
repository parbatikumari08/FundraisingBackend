import express from 'express';
import cors from 'cors';
import internRoutes from './routes/internRoutes.js';

const app = express();
app.use(cors());
app.use('/api', internRoutes);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Fundraising Backend is Live!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
