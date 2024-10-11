const Aluno = require('./src/aluno');
const Turma = require('./src/turma');
const TurmaPresencial = require('./src/turmaPresencial');
const http = require('http');

let aluno1 = new Aluno('Luiza', 'luizanaka234', '123445');
let turma1 = new Turma('TURMA01', 7);
let turmaPresencial1 = new TurmaPresencial(80, 'TURMA02', 6);

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write(`Aluno: ${aluno1.nome}\n`);
    res.write(`Turma: ${turma1.getCodigo()}\n`);
    res.write(`Nota: ${turma1.getNota()}\n`);
    res.write(`Aprovado na Turma? ${turma1.aprovado() ? 'Sim' : 'Não'}\n`);

    res.write(`Turma Presencial: ${turmaPresencial1.getCodigo()}\n`);
    res.write(`Frequência: ${turmaPresencial1.getFrequencia()}%\n`);
    res.write(`Aprovado na Turma Presencial? ${turmaPresencial1.aprovado() ? 'Sim' : 'Não'}\n`);

    res.end();
}).listen(3000);

console.log('Servidor rodando na porta 3000...');