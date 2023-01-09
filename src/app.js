const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.send("Servidor de supermarket")
});

const PORT = 3000;

app.listen(PORT, () =>{

});
console.log(`Server on port ${PORT}`);