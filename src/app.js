const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('port', process.env.PORT | 3000);

app.get('/', (req,res) => {
    res.send("Servidor de supermarket")
});
app.use('/queries',require('./routes/queries'));

app.listen(app.get('port'));
console.log(`Server running on port ${PORT}`);