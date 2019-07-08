module.exports = async function (req, res) {
    User.find({}).exec(function(err,cursos){
        if(err){
            res.send(500, {error: 'database error'});
        }
        else{
            res.view('pages/curso-lista', {cursos:cursos});
        }
    });
};