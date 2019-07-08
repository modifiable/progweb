/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    index: async function (req, res) {
        res.view('pages/crud-curso');
    }//,
    //create: async function (req, res) {}//,
    /*read: async function (req, res) {
        var cursoId = req.param('cursoId');
        res.end(cursoId);
    },
    update: async function (req, res) {
        var cursoId = req.param('cursoId');
        res.end(cursoId);
    },
    delete: async function (req, res) {
        var cursoId = req.param('cursoId');
        res.end(cursoId);
    }*/
};

