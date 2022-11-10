const { expect } = require('chai');
const sinon = require('sinon');
const usersService = require('../../src/services/usersService');
const usersModel = require('../../src/models/usersModel');

const mockUsers = [
  {
    id: 1,
    name: 'Clark Kent',
    email: 'clark.kent@dailyplanet.com',
    rule: 'user',
    password: 'martha123',
  },
];

const mockUsersWithoutPassword = [
  {
    id: 1,
    name: 'Clark Kent',
    email: 'clark.kent@dailyplanet.com',
    rule: 'user',
  },
];

describe('Validando funcionamento do serviço do usuário', function () {
  describe('Valida funcionamento de listar os usuários', function () {
    it('Lista corretamente todos os usuários existentes sem a senha', async function () {
      // Arrange - Arranjar
      // respeitar / manter a estrutura do retorno da função atual
      sinon.stub(usersModel, 'getAllUsers').resolves(mockUsers);

      // Act - Agir
      const result = await usersService.getAllUsers();

      // Assert - Aferir
      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(mockUsersWithoutPassword);
    });
  });

  // it('teste simples', function () {
  //   expect(true).to.be.equal(false);
  // });
});