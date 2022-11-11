const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { createNewUser } = require('../../../src/controllers/usersController');
const userService = require('../../../src/services/usersService');

describe('Validando funcionamento do controller do usuário', function () {
  describe('Validando a criação de usuário', function () {
    it('Cria o usuário corretamente retornando status 200', async function () {
      // Arrange

      // Valores 
      const userRequest = { 
        name: 'Gui',
        email: 'guilherme@xablau.com',
        password: 'xablau123456',
      };
      
      const req = {
        body: userRequest,
      };

      // Dublês

      const res = { status: null };
      res.status = sinon.stub().returns(res); // retorna res por conta do comportamento do express
      res.json = sinon.stub().returns(); // json é terminal, última função do express, nada depois dele

      const id = 1;
      sinon.stub(userService, 'createNewUser').resolves({ id });

      // Act
      // console.log('res', res);
      await createNewUser(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ 
        message: `Usuário com id: ${id} criado com sucesso`,
      });
    });
  });
});
