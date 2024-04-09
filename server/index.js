const server = require("./src/app");

const { connection } = require('./src/db')

const PORT = 3001;

server.listen(PORT, () =>{
    connection.sync({force: false});
    console.log("Listening on port 3001");
})