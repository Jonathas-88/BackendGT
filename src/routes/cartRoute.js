const { listarItens, criarCarrinho, deletarCarrinho } = require('../controllers/cartController');
const { deletarItens, alterarItens } = require('../controllers/cartItemController');

const router = require('express').Router();

//listar carrinho itens
router.get('/:id/itens', listarItens)

//cria carrinho
router.post('/', alterarItens)

//Deleta todos os itens do carrinho
router.delete('/:id/itens', deletarItens)

module.exports = router;