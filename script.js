
//CLASSE PARQUIMETRO
class parquimetro{
    constructor(conta){
        this.conta = conta;
    }

    //métodos
    depositar(){
        const deposito = parseFloat(document.getElementById("valorDeposito").value);

        if (isNaN(deposito) || deposito <= 0){
            alert("Digite um número válido!")
            document.getElementById("valorDeposito").value = ""
            return
        }else{

            this.conta.depositar(deposito);
            this.conta.calcularTempo();
            
            this.mostrarSaldo(this.conta.saldo);
            this.mostrarTempo(this.conta.tempo);
        }

    }

    mostrarTempo(min){
        document.getElementById("tempo").textContent = `Tempo: ${min} min.`

    }

    mostrarSaldo(valor){
        document.getElementById("saldo").textContent = `Saldo: R$ ${valor}`
        document.getElementById("valorDeposito").value = ""

    }

    darTroco(){
        this.mostrarTroco(this.conta.saldo);
        this.conta.darTroco();
        this.mostrarSaldo(this.conta.saldo);

        
    }

    mostrarTroco(valor){
        document.getElementById("troco").textContent = `Troco: R$ ${valor}`

    }
}

//CLASSE CONTA USUARIO
class usuario{
    #saldo
    #tempo
    constructor(){

        this.#saldo = 0;
        this.#tempo = 0;
    }

    depositar(valor){
        this.#saldo += valor;
    }

    calcularTempo(){

        this.#tempo = 0;

        if(this.#saldo >= 1 && this.#saldo < 1.75){
            this.#tempo = 30;
            this.#saldo -= 1;
        }else if(this.#saldo >= 1.75 && this.#saldo < 3){
            this.#tempo = 60;
            this.#saldo -= 1.75
        }else if(this.#saldo >= 3){
            this.#tempo = 120;
            this.#saldo -= 3;
        }else{
            alert("Saldo insuficiente")
        }
    }

    darTroco(){
        if (this.#saldo > 0){
           this.#saldo -= this.#saldo
        }
    }

    get saldo(){
        return this.#saldo;
    }

    get tempo(){
        return this.#tempo;
    }
}

const nUsuario = new usuario();
const nParquimetro = new parquimetro(nUsuario);
