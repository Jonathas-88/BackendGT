const router = require('express').Router();
const { inserirItens, alterarItens, limparItens} = require('../controllers/cartItemController.js')
const authMiddleware = require('../middleware/authMiddleware.js')



router.post('/', authMiddleware, 
    //#swagger.summary = 'Insere itens no carrinho'
    inserirItens)

 
router.put('/:id', 
    //#swagger.summary = 'Altera a quantidade de itens do carrinho'
    alterarItens) 

//deleta item
router.delete('/:id', 
    //#swagger.summary = 'Deleta itens do carrinho'
    limparItens) 


module.exports = router