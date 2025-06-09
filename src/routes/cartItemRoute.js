const router = require('express').Router();
const { inserirItens, alterarItens, limparItens} = require('../controllers/cartItemController.js')


 //insere itens no carrinho
router.post('/', inserirItens)

 //Alterar a quantidade item carrinho
router.put('/:id', alterarItens) 

//deleta item
router.delete('/:id', limparItens) 


module.exports = router