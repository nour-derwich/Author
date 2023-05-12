const express = require("express")
const app = express()
const cors = require("cors");
const PORT = 8000
const DB_NAME = "authorsandbooks";
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require("./config/mangoose.cofig")(DB_NAME);
require("./routes/author.routes")(app);



app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🚀🚀`) })