/// <reference  types="cypress"/>

import LoginPage from '../support/PageObject/login'
import MinhaContaPage from '../support/PageObject/minhaConta'
import ComprasPage from '../support/PageObject/Compras'
import CheckoutPage from '../support/PageObject/Checkout'

let data;

before(() =>{
    cy.fixture('user').then(dadosUsuario =>{
        data = dadosUsuario
    })
});

context('Login',()=>{
   
    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    it('Login com sucesso', () => {
       cy.get('.icon-user-unfollow').click()
        LoginPage.login(data.usuario, data.senha)
        MinhaContaPage.getUsuarioLogado()
        MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !');
    });

    it('Login sem sucesso', () => {
        cy.get('.icon-user-unfollow').click()
        LoginPage.login('teste', '123456')
        LoginPage.mensagemDeErro().should('contain', 'Erro: A senha informada para o usuário teste está incorreta. Perdeu a senha?')
    });

});

context('Escolher o produto e finalizar a compra', () =>{

    it('comprar o produto e ir para o carinho', () => {
        ComprasPage.clicaNoBotaoComprar()
        ComprasPage.clicaNoProduto()
        ComprasPage.size()
        ComprasPage.color()
        ComprasPage.comprarProdutos()
        ComprasPage.verOcarinho()
        ComprasPage.concluirCompra()
    });

    it('preencher o formulario e receber uma mensagem de cadastro', () => {
        CheckoutPage.digitaNome('Lucas')
        CheckoutPage.digitaSobrenome('Emanuel')
        CheckoutPage.digiteRua('Rua Santo Antônio')
        CheckoutPage.digiteCidade('Duas Estradas')
        CheckoutPage.digitaEmpresa('Teste tecnologia')
        CheckoutPage.colocandoCEP('58265000')
        CheckoutPage.criarTelefone('83991206898')
        CheckoutPage.digiteEmail('qa@teste.com')
        CheckoutPage.clicaCriarConta()
        CheckoutPage.clicaFinalizarCompra()
        CheckoutPage.msgPedidoSemCadastro().should('contain','Já está cadastrado? Clique aqui para entrar')
    });

});