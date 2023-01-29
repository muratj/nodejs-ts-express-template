import express from 'express';

// Constants
const PORT = process.env.PORT || 3000;

const app = express();

// App Configurations
app.use(express.json());

app.get('/hello', (req, res) => {
	res.send({ greeting: 'Hello world' });
});

// Bootstrap
app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
});
