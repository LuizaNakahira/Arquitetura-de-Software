const Turma = require('./turma');

class TurmaPresencial extends Turma {
    #frequencia;

    constructor(frequencia, codigo, nota){
        super(codigo, nota);
        this.#frequencia = frequencia;
    }
    aprovado() {
        return super.aprovado() && this.#frequencia >= 75;
    }

    getFrequencia() {
        return this.#frequencia;

    }
    getCodigo() {
        return super.getCodigo();
    }
}

module.exports = TurmaPresencial