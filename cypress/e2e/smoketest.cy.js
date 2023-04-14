import { faker } from '@faker-js/faker';

const baseUserName = faker.internet.userName();

describe('End-to-end test on login, registration, and adding Samsung Galaxy s6 to cart', () => {
  const userName = baseUserName;
  const password = 123456;

  it('Should be able to make all actions', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.register(userName, password);
    cy.login(userName, password);
  })
})