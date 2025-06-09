const { PrismaClient } = require ('@prisma/client')

const prisma = new PrismaClient()
async function testConnection() {
    try {
        await prisma.$connect();
        console.log("Conexão com o banco estabelecido!");
    } catch (error) {
        console.error("erro ao conectar:", erro);
    } finally{
        await prisma.$disconnect();
    }
}

testConnection();

module.exports = prisma