const prisma = require("../config/prisma")


async function cartCheck(cart_id) {
    return await prisma.cart.findUnique({
        where: {id: cart_id},
        select: {id: true}
    })
}

async function listarCarrinhoRepository(cart_id, user) {
    return prisma.cartItem.findMany({
        where: {
            cart: {
                id: Number(cart_id),
                user_id: user
            }
        }
    })
}

async function criarCarrinhoRepository(user) {
    return await prisma.cart.create({
        data: {user_id: user}
    })
}

function limparCarrinhoRepository(cart_id, user){
    return prisma.cartItem.deleteMany({
        where: {
            cart: {
                id: Number(cart_id),
                user_id: user
            }
        }
    })
}

module.exports = {
    cartCheck,
    listarCarrinhoRepository,
    criarCarrinhoRepository,
    limparCarrinhoRepository
}