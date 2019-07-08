module.exports = async function (req, res) {

    res.view("/cursos/lista");
    await User.create({
        nome:req.body.nome, 
        sigla:req.body.sigla, 
        descricao:req.body.desc
    });

    return res.ok();
};