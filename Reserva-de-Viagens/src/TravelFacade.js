const AluguelCarros = require('./AluguelCarros');
const ReservaHoteis = require('./ReservaHoteis');
const ReservaVoos = require('./ReservaVoos');

class TravelFacade{
    constructor(){
        this.AluguelCarros = new AluguelCarros();
        this.ReservaHoteis = new ReservaHoteis();
        this.ReservaVoos = new ReservaVoos();
    };   
    
    viagemCompleta(nome, data){
        this.AluguelCarros.reservaCarro(nome, data);
        this.ReservaHoteis.reservaHotel(nome, data);
        this.ReservaVoos.reservaVoo(nome, data);
        console.log("Viagem concluida!");
    };
};
module.exports = TravelFacade;