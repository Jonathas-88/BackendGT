const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController.js')



 //insere itens no carrinho
 router.get('/:id/itens', listarItens)

 //Alterar a quantidade item carrinho
 router.post('/', alterarItens)

//deleta item
router.delete('/:id/itens', deletarItens)