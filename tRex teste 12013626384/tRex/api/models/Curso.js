module.exports = {
    attributes:{
        nome:{
            type: 'string',
            required: true,
            columnType: 'varchar(64)',
            unique: 'true'
        },
        sigla:{
            type: 'string',
            required: true,
            columnType: 'varchar(4)',
            unique: 'true'
        },
        descricao:{
            type: 'string',
            defaultsTo: '-'
        }
    }
};