class Turma{
    #codigo;
    #nota;
    constructor(codigo, nota){
        this.#codigo = codigo;
        this.#nota = nota;
    }
    aprovado(){
        return this.#nota >= 6;
    }

    getCodigo(){
        return this.#codigo;
    }
    getNota(){
        return this.#nota;
    }
}

module.exports = Turma;