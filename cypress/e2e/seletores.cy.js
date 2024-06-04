///<reference types = "cypress"/>

describe('Seletores avançados com cypress', () => {
  beforeEach(() => {
    cy.visit('../../seletores.html');
  });

  it('Seleciona elementos que contêm um Texto específico', () => {
    cy.contains('Irmão 2').should('exist');
    cy.contains('Enviar').click();
  });

  it('Seleciona o elemento com a classe pai', () => {
    cy.get('.pai').should('exist');
  });

  it('Seleciona o elemento com o id Filho', () => {
    cy.get('#id-filho').should('have.attr', 'class', 'filho-4');
  });

  it('Seleciona um elemento filho dentro do elemento com a classe pai', () => {
    cy.get('.pai').find('.filho-4').should('contain', 'Item solto');
  });

  it('Seleciona o segundo elemento <span> com a classe irmao', () => {
    cy.get('.irmao + .irmao').should('contain', 'Irmão 2');
  });

  it('Seleciona o próximo elemento irmão', () => {
    cy.get('.item-especial').next().should('contain', 'Item 3');
  });

  it('Seleciona o elemento irmão anterior', () => {
    cy.get('.item-especial').prev().should('contain', 'Item 1');
  });

  it('Seleciona o irmão da div anterior', () => {
    cy.get('[name="nome-do-atributo"]').prev().should('contain', 'Item 1');
  });

  it('Seleciona o terceiro elemento <li> encontrado', () => {
    cy.get('li').eq(2).should('contain', 'Item 3');
  });

  it('Seleciona o elemento com o atributo data-test', () => {
    cy.get('[data-test="div-pai"]').should('contain', 'Item solto');
  });

  it.skip('Seleciona o elemento com a classe pai do elemento com a classe filho', () => {
    cy.get('.item-especial').parent('.pai').should('have.attr', 'class', 'pai');
  }); //REVER

  it('Seleciona o elemento com um valor em um select', () => {
    cy.get('select').select('Muito');
    cy.get('[type="submit"]').click();
    cy.get('#mensagemFeedback').should(
      'contain',
      'Obrigado por compartilhar conosco!'
    );
    cy.contains('Obrigado por compartilhar conosco!');
  });
});
