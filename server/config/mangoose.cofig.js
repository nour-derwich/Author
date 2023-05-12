// import mongoose

const mongoose = require("mongoose");

module.exports = (DB_NAME) => {
// `mongodb://localhost/${DB_NAME}
    mongoose.connect(`mongodb://127.0.0.1/${DB_NAME}`)
        .then(() => { console.log(`Established a connection to the database ${DB_NAME} 🏁🏁`) })
        .catch((err) => { console.log(`There was a problem connecting to ${DB_NAME}`, err) })
}