const prisma = require("../config/prisma")


async function cartCheck(cart_id) {
    return await prisma.cart.findUnique({
        where: {id: cart_id},
        select: {id: true}
    })
}

async function listarCarrinhoRepository(cart_id) {
    return prisma.cartItem.findMany({
        where: {id: Number(cart_id)}
    })
}

async function criarCarrinhoRepository(user_id) {
    return await prisma.cart.create({
        data: {user_id}
    })
}

function limparCarrinhoRepository(cart_id){
    return prisma.cartItem.delete({
        where: {id: Number(cart_id)}
    })
}

module.exports = {
    cartCheck,
    listarCarrinhoRepository,
    criarCarrinhoRepository,
    limparCarrinhoRepository
}