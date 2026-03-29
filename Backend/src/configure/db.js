const mysql = require('mysql2/promise'); // Ensure '/promise' is added

const pool = mysql.createPool({
    host: process.env.db_Host,
    user: process.env.db_User,
    password: process.env.db_Password,
    database: process.env.db_Database
});

module.exports = pool; // Or module.exports = pool.promise() if not using /promise import
