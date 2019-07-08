module.exports = {
    attributes:{
        jogador:{
            type: 'number',
            columnType:'integer',
            required: true,
            isInteger: true,
            unique: 'true'
        },
        pontuacao:{
            type: 'number',
            isInteger: true,
            defaultsTo: 0
        },
        data:{
            type: 'string',
            maxLength: 45,
            defaultsTo: '--/--/----'
        }
    }
};