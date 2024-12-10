const { Pool } = require("pg");

// Para crear un pool de conexión
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Para exportar la función para consultas
const query = (text, params) => pool.query(text, params);

module.exports = { query };
