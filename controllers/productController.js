const productController = {
    showProduct: (req, res) => {
        /** 
         * Renderizar visualização
         * 
         * O Segundo parâmetro envia um objeto.. suas propriedades..
         * ,varObjeto | Disponibilizaria na view somente as propriedades deste objeto
         * 
         * , { varObjeto }      ou
         * , objeto = varObjeto ou
         * , { objeto: varObjeto } | Disponibilizaria o objeto e suas propriedades
         */

        res.render('products');
    }
}
module.exports = productController;