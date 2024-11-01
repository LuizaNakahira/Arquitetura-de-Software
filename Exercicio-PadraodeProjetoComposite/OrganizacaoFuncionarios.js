// Classe de Funcionario
class Funcionario{
    constructor(nome,salario){
        if(this.constructor == Funcionario){
            throw new Error('Funcionario é uma classe abstrata e não pode ser instanciada diretamente.');
        }
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario(){
        throw new Error('Este método deve ser sobrescrito nas subclasses.');
    }
}

// Classe FuncionarioIndividual
class FuncionarioIndividual extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }

    calcularSalario() {
        return this.salario;
    }
}

// Classe Departamento
class Departamento extends Funcionario {
    constructor(nome) {
        super(nome);
        this.subordinados = [];
    }

    adicionar(funcionario) {
        this.subordinados.push(funcionario);
    }

    remover(funcionario) {
        this.subordinados = this.subordinados.filter(sub => sub !== funcionario);
    }

    calcularSalario() {
        return this.subordinados.reduce((total, func) => total + func.calcularSalario(), 0);
    }
}

const gerente = new FuncionarioIndividual("João", 7000);
const desenvolvedor = new FuncionarioIndividual("Ana", 5000);

const departamentoTI = new Departamento("TI");
departamentoTI.adicionar(gerente);
departamentoTI.adicionar(desenvolvedor);

const diretor = new FuncionarioIndividual("Carlos", 15000);
const departamentoExecutivo = new Departamento("Executivo");
departamentoExecutivo.adicionar(diretor);
departamentoExecutivo.adicionar(departamentoTI);

console.log("Salário total do Departamento Executivo:", departamentoExecutivo.calcularSalario());