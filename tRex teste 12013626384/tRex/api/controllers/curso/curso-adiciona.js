module.exports =  async function (req, res){
    try{     
      await Curso.create({
        nome: req.body.nome,
        sigla: req.body.sigla,
        descricao: req.body.desc
      }); 
      console.log(req.body)   
      res.redirect('/cursos');
    }
    catch(err){
      console.log(err);
    }    
};