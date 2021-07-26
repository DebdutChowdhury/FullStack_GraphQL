const express = require("express");
const app = express() ;
const port = 8080;
const schema = require("./Schemas/index")
const {graphqlHTTP} = require("express-graphql")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)



app.listen(port, ()=>{
    console.log("Server Running...");
})