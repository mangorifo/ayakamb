const mongoose = require('mongoose');
const { mongodb } = require('../lwtok.json')
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('[EVENTS] ConnectToMongoDB | Connected to MongoDB'));