import Sequelize from 'sequelize';

const db = new Sequelize('be3bym6qdtkisnd7hdbh', 'uheste5enabgqrwz', 'XpTwwAe4TD2KmJpAwhXA', {
    host: 'be3bym6qdtkisnd7hdbh-mysql.services.clever-cloud.com',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;