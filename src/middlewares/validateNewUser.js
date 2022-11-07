const validaName = (name, res) => {
  if (name === undefined) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  }
  if (name.length < 2) {
    return res.status(400).json({ message: 'O campo name precisa ter pelo menos 2 caracteres' });
  }
  return null;
};

const validaEmail = (email, res) => {
  if (email === undefined) {
    return res.status(400).json({ message: 'O campo email é obrigatório' });
  }
  const REGEX_EMAIL = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
  if (!REGEX_EMAIL.test(email)) {
    return res.status(400).json({ message: 'O campo email precisa de um email válido' });
  }
  return null;
};

const validaPassword = (password, res) => {
  if (password === undefined) {
    return res.status(400).json({ message: 'O campo password é obrigatório' });
  }
  if (password.length < 8) {
    return res
    .status(400)
    .json({ message: 'O campo password precisa ter pelo menos 8 caracteres' });
  }
  return null;
};
const validateNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const vn = validaName(name, res);
  if (vn !== null) return vn;

  const nv = validaEmail(email, res);
  if (nv !== null) return vn;

  const vp = validaPassword(password, res);
  if (vp !== null) return vp;

  next();
};

module.exports = { validateNewUser };
