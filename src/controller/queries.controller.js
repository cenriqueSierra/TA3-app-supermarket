const dbConnection = require('../config/databaseConnec');
const connection = dbConnection();



let mayorNumeroClientes = async (req, res) => {
  let queryEntered = "SELECT * FROM Store ORDER BY DailyCustomerCount DESC LIMIT 10"; 
  await connection.query(
      queryEntered,(err,result) => {
        if (result){
          res.send(result)
          console.log(JSON.stringify(result));
        } 
        res.status(500).send(err);
      })
};

let mayorCantidadVentas = async (req, res) => {
  let queryEntered = "SELECT * FROM Store ORDER BY Store_Sales DESC LIMIT 20"; 
  await connection.query(
      queryEntered, (err,result) => {
        if (result) 
          res.send(result)
        else
        res.status(500).send(err);
      })
};

let mayorAreaFisica = async (req, res) => {
  let queryEntered = "SELECT * FROM Store ORDER BY Store_Area DESC LIMIT 5" 
  await connection.query(
      queryEntered,(err,result) => {
        if (result) 
          res.send(result)
        else
        res.status(500).send(err);
      })
};

module.exports = {
  mayorNumeroClientes,
  mayorCantidadVentas,
  mayorAreaFisica
};