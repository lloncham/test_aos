const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/aos_db', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongoDB (db : aos_db)");
      })
    .catch(e => {
		console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
