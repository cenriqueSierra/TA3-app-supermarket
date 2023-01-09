const dbConnection = require('../config/databaseConnec');
const connection = dbConnection();



let mayorNumeroClientes = async (req, res) => {
  await connection.query(
      "SELECT * FROM Store ORDER BY DailyCustomerCount DESC DELIMITER 10",
      (err,result) => {
        if (result){
          res.send(result)
          console.log(JSON.stringify(result));
        } 
        res.status(500).send(err);
      })
};

let mayorCantidadVentas = async (req, res) => {
  await connection.query(
      "SELECT * FROM Store ORDER BY Store_Sales DESC DELIMITER 20",
      (err,result) => {
        if (result) 
          res.send(result)
        else
        res.status(500).send(err);
      })
};

let mayorAreaFisica = async (req, res) => {
  await connection.query(
      "SELECT * FROM Store ORDER BY Store_Area DESC DELIMITER 5",
      (err,result) => {
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