const axios = require('axios');

axios.get('http://localhost:3000/')
    .then(res => {
        console.log('Test Passed:', res.data);
    })
    .catch(err => {
        console.error('Test Failed', err);
        process.exit(1);
    });
