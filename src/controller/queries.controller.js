const dbConnection = require('../config/databaseConnec');
const connection = dbConnection();


let presentarQuery = async (req, res) => {
  res.send("Entra a las rutas mnclientes, mcventas, mafisica, colocala en la URL");
}

let mayorNumeroClientes = async (req, res) => {
  let queryEntered = "SELECT * FROM store ORDER BY Daily_Customer_Count DESC LIMIT 10"; 
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
  let queryEntered = "SELECT * FROM store ORDER BY Store_Sales DESC LIMIT 20"; 
  await connection.query(
      queryEntered, (err,result) => {
        if (result) {
          res.send(result)
          console.log(JSON.stringify(result));
        }
        
        res.status(500).send(err);
      })
};

let mayorAreaFisica = async (req, res) => {
  let queryEntered = "SELECT * FROM store ORDER BY Store_Area DESC LIMIT 5" 
  await connection.query(
      queryEntered,(err,result) => {
        if (result) {
          res.send(result)
          console.log(JSON.stringify(result));
        }
        
        res.status(500).send(err);
      })
};

module.exports = {
  presentarQuery,
  mayorNumeroClientes,
  mayorCantidadVentas,
  mayorAreaFisica
};