describe('app Testing ', () => {

beforeEach(() => {
  cy.visit('http://localhost:3000')
})

///setting helper getters -----

const firstName = () => cy.get('input[name=first_name]')
const lastName = () => cy.get('input[name=last_name]')
const password = () => cy.get('input[name=password]')
const email = () => cy.get('input[name=email]')
const terms = () => cy.get('input[name=terms]')
const button = () => cy.get('form>button')

/// sanity check -----

it('sanity check to check tests working', () => {
  expect(1+2).to.equal(3)
})

it ('the proper elements are showing on the page', () => {
  firstName().should('exist');
  lastName().should('exist');
  email().should('exist');
  terms().should('exist');
  button().should('exist');
})

describe('check typing and cancelling texts from all input fields', () => {
  it('input texts can be typed in the appropriate fields', () => {
cy.url().should('include', 'localhost')
  })
  
  it('submit button starts out disabled', () => {
    button().should('be.disabled');
  })
  it('can type in the firstname field', () => {
    firstName().should('have.value', "").type('I love Coding!').should('have.value', 'I love Coding!')
  })
  it('can type in the lastname field', () => {
    lastName().should('have.value', "").type('I love Coding!').should('have.value', 'I love Coding!')
  })
  it('can type in the password field', () => {
    password().should('have.value', "").type('Ronaldinho').should('have.value', 'Ronaldinho')
  })
  it('can type in the email field', () => {
    email().should('have.value', "").type('mina@mina.com').should('have.value', 'mina@mina.com')
  })
 
  it('terms checkbox can be checked', () => {
    terms().click().should('have.value', 'on');
  })
 
  it('checking when filling all inputs can click submit and when click submit form resets', () => {
    firstName().type('I love Coding!');
    lastName().type('I love Coding!');
    password().type('Ronaldinho');
    email().type('mina@mina.com');
    terms().click();
    button().should('not.be.disabled').click();
    firstName().should('have.value', "");
    lastName().should('have.value', "");
    password().should('have.value', "");
    email().should('have.value', "");
    terms().should('not.be.checked');
  })
 
  it('check form validation for names, password and email', () => {
    firstName().type('M');
    cy.contains('First Name must be 3 or more characters');
    lastName().type('S');
    cy.contains('Last Name must be 3 or more characters');
    password().type('S');
    cy.contains('Password is too short');
    email().type('asd@');
    cy.contains('Must be a valid email address');
  } )

})

describe('can add a new friend/s', () => {
  it('can add a new friend', ()=>{
    firstName().type('Mina');
    lastName().type('Mikhael');
    password().type('Ronaldinho');
    email().type('mina@mina.com');
    terms().click();
    button().click();
  
    cy.contains('Mina');
    cy.contains('Mikhael');
    cy.contains('mina@mina.com')
  })
  })
    
})