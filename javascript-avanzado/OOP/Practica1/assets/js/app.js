/* Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.
 */

class Carro{     
    constructor(marca, color, modelo, velocidad, numeroDePuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroDePuertas = numeroDePuertas;
    }

    acelerar(){
        this.velocidad ++;
        return  document.write(`La velocidad actual es ${this.velocidad} <br/>`);
    }

    frenar(){
        this.velocidad = 0;
        return document.write(`La velocidad actual es ${this.velocidad} <br/>`);
    }

    reversa(){
        this.velocidad -- ;
        return document.write(`La velocidad actual es ${this.velocidad} <br/>`);
    }

    toString(){
        let descripcion = `Marca: ${this.marca}<br> Color: ${this.color}<br> Modelo: ${this.modelo}<br> Numero de puertas: ${this.numeroDePuertas}<br> Velocidad actual:${this.velocidad}<br>`;
        return document.write(descripcion);
    }
}

const Carro1 = new Carro("ferrari","rojo","f70",0,2)
Carro1.toString();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.reversa();
Carro1.frenar();


