class CheckoutPage{

    digitaNome(nome){
        cy.get('#billing_first_name').type(nome)
    }

    digitaSobrenome(sobrenome){
        cy.get('#billing_last_name').type(sobrenome)
    }

    digitaEmpresa(nomeEmpresa){
        cy.get('#billing_company').type(nomeEmpresa)
    }

    escolhePais(){
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Brasil{enter}')
    }

    digiteRua(rua){
        cy.get('#billing_address_1').type(rua)
    }

    colocandoEstado(estado){
        cy.get('#billing_state').type(estado)
    }

    digiteCidade(cidade){
        cy.get('#billing_city').type(cidade)
    }

    colocandoCEP(cep){
        cy.get('#billing_postcode').type(cep)
    }

    criarTelefone(tel){
        cy.get('#billing_phone').type(tel)
    }

    digiteEmail(email){
        cy.get('#billing_email').type(email)
    }

    clicaCriarConta(){
        cy.get('#createaccount').click()
    }

    clicaFinalizarCompra(){
        cy.get('#place_order').click()
    }
    
    msgPedidoRecebido(){
       return cy.get('woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received')
    }

    msgPedidoSemCadastro(){
        return cy.get('.woocommerce-form-login-toggle > .woocommerce-info')
    }

    mensagemDeSessaoExpirada(){
        return cy.get('.woocommerce-error')
    }
}

export default new CheckoutPage()