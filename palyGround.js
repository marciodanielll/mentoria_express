const Joi = require('joi');

/* const name = 'Daniel'; */

/* const checkName = Joi.string().min(3).max(7); */

const user = { 
  // name: 'Daniellllllllllll',
  email: 'marcio.daniel@msn.com',
  age: 17.5,
  password: 'martha123',
};

const checkUser = Joi.object({
  name: Joi.string().min(3).max(7).required(),
  email: Joi.string().email().required(),
  age: Joi.number().strict().integer().min(18)
.required(),
  password: Joi.string().min(8).max(50).required(),
}).required().messages({
  'any.required': 'O campo {#label} é obrigatório.',
  'string.empty': 'O campo {#label} não pode estar vazio.',
  'string.base': 'O campo {#label} tem que ser uma string.',
  'string.min': 'O campo {#label} precisa ter {#limit} caracteres',
  'string.max': 'O campo {#label} precisa ter no máximo {#limit} caracteres',
  'number.base': 'O campo {#label} tem que ser do tipo number.',
});

const { error } = checkUser.validate(user);

if (error === undefined) {
  console.log('Tudo certo com a validação');
} else {
  console.log('----------------------------------------------------------');
  console.log('Type error: => ', error.details[0].type);
  console.log('Message error: => ', error.details[0].message);
  console.log('----------------------------------------------------------');
}
