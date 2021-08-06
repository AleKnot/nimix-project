const database = require('./database/database_connection')

exports.novoUsuario = ({ nome, email, senha }) => {
          
        database.insert(nome,email,senha).table("user").then(data => {
            console.log(data);
            response.json({message:"Usuário criado com sucesso!!"})
            }).catch(error => {
            console.log(error)
            })

        return usuario;
      };