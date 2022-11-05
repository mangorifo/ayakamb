const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('Loaded MongoDB event'));