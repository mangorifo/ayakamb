const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('[EVENTS] connectmongo.js | Loaded MongoDB Event'));