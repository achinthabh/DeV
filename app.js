const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, DevOps! Your app is running.');
});

app.get('/api', (req, res) => {
    res.json({ message: 'This is your API endpoint!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
