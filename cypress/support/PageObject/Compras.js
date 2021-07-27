class ComprasPage{

    clicaNoBotaoComprar(){
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }

    clicaNoProduto(){
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    }

    size(){
        cy.get('.button-variable-item-XS').click()
    }

    color(){
        cy.get('.button-variable-item-Blue').click()
    }

    comprarProdutos(){
        cy.get('.single_add_to_cart_button').click()
    }

    verOcarinho(){
        cy.get('.woocommerce-message > .button').click()
    }

    concluirCompra(){
        cy.get('.checkout-button').click()
    }
}

export default new ComprasPage()