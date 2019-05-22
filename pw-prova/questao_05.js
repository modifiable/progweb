function Empregado(nome, salario) {
    var empregado = {
        nome,
        salario
    }

    if (salario >= 0) {
        empregado.nome = nome
        empregado.salario = salario
    }
    else {
        empregado.nome = nome
        empregado.salario = 0.0
    }

    empregado.setSalario = function setSalario(novoSalario) {
        if (novoSalario >= 0) {
            empregado.salario = novoSalario
        }
        else {
            empregado.salario = 0.0
        }
    }

    empregado.getSalario = function getSalario() {
        console.log(empregado.salario)
        return (empregado.salario)
    }

    empregado.setNome = function setNome(novoNome) {
        empregado.nome = novoNome
    }

    empregado.getNome = function getNome() {
        console.log(empregado.nome)
        return (empregado.nome)
    }

    return empregado
}

var maria = Empregado("Maria", 15000)
var joao = Empregado("Joao", 10000)

var salarioM = maria.getSalario()
var salarioJ = joao.getSalario()


maria.setSalario(salarioM + (salarioM * 0.10))
joao.setSalario(salarioJ + (salarioJ * 0.10))


maria.getSalario()
joao.getSalario()