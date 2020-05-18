import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        desciption: 'Ler livro',
        list: [{
            _id: 1,
            desciption: 'Pagar fatura do cartão',
            done: true
        },{
            _id: 2,
            desciption: 'Reunião com a equipe as 10:00',
            done: false
        },{
            _id: 3,
            desciption: 'Consulta médica na terça depois do almoço',
            done: false
        },]
    })
})

export default rootReducer