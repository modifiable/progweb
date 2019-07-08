module.exports = async function (req, res) {
        let cursos = await Curso.find()
    res.view('pages/crud-curso', {title: 'Curso', cursos})
};