class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

     falar(){
        console.log(`${this.nome} está falando`)
     };

     comer(){
        console.log(`${this.nome} está comendo`);
     }
}


const p1 = new Pessoa("Raul", "Brunelli");
p1.falar();
p1.comer();


// =========================== GETTER E SETTERS ================================ //

const _velocidade = Symbol("velocidade")

class Carro {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }


    get velocidade(){
        console.log("getters");
        return this[_velocidade];
    }


    set velocidade(valor){
        console.log("setters");
        if(typeof valor !== 'number') return;
        if(valor >= 200 || valor <= 0) return;
        this[_velocidade] = valor;
    }


    acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade] ++;
    }

    desacelerar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade] --;
    }
};

const c1 = new Carro("Fusca");
for(let i = 0; i <= 200; i++){
    c1.acelerar();
}

c1.velocidade = 500
console.log(c1.velocidade);

// ======================= HERANÇA ====================== //

class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} ligado`);
            return;
        }
        this.ligado = true
        
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} desligado`);
            return;
        }
        this.ligado = false
        
    }
};

class Celular extends DispositivoEletronico{
    constructor(nome, modelo, cor){
        super(nome)
        this.modelo = modelo;
        this.cor = cor;
    };
}

const c2 = new Celular("iphone", "iphone 11", "branca");
c2.ligar();
console.log(c2);


// ========================= metodo estático ============= //

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    };

    aumentaTv(){
        this.volume += 2;
    }

    diminuiTv(){
        this.volume -= 2;
    }

    static TrocaPilha(){
        console.log("Troquei a Pilha");
    };
};

const controle1 = new ControleRemoto("LG");
controle1.aumentaTv();
controle1.aumentaTv();
controle1.aumentaTv();
// controle1.TrocaPilha(); ERRO
ControleRemoto.TrocaPilha(); // Jeito Certo metodo Estático

console.log(null  || "string" );