var info = { 
    title: "studants", 
    studantsList: [ 
        {name: "Pedro", age: 32, cpf: "123"},
        {name: "Thiago", age: 15, cpf: "456"},
        {name: "Maria", age: 60, cpf: "789"}
    ]
}
const studantController = {
    index: (req, res) => {
        res.render('studants', info);
    }
}

module.exports = studantController;