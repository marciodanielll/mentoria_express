const Joi = require('joi');

const checkUser = Joi.object({
  name: Joi.string().min(3).max(7).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(50).required(),
}).required().messages({
  'any.required': 'O campo {#label} é obrigatório.',
  'string.empty': 'O campo {#label} não pode estar vazio.',
  'string.base': 'O campo {#label} tem que ser uma string.',
  'string.min': 'O campo {#label} precisa ter {#limit} caracteres.',
  'string.max': 'O campo {#label} precisa ter no máximo {#limit} caracteres.',
});

const validateNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const { error } = checkUser.validate({ name, email, password });
  if (error !== undefined) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateNewUser;
