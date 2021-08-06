const usuariosModel = require("../model/usuariosModel");


exports.cadastrarUsuario = ({ nome, email, senha}) => {
  
  return usuariosModel.novoUsuario({ nome, email, senha });
};

exports.listarTodosUsuarios = () => usuariosModel.listarTodos();