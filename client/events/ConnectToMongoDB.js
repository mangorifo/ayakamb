const mongoose = require('mongoose');
const mongodb = process.env.mongodb;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('[EVENTS] ConnectToMongoDB | Connected to MongoDB'));