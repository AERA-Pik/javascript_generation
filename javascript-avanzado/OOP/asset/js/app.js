//clases: molde que nos permite crear objetos

// Nombres de las clases inician con mayuscula
class Animal{
    /* nombre = null;
    especie = null; */ // en java se tienen que especificar la variables antes de usarlas en el constructor
    //constructor es una funcion
    constructor(nombre, especie){
        //this hace referencia al contexto en que se esta utilizando
        this.nombre = nombre;
        this.especie = especie;        
    }

    //Getters y Setters
    //solo tienen estos propositos, leer o modificar el atributo
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = especie;
    }
    
    // metodos == funcion
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`);   
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`;
        return mensaje;
    }

    //Metodos estaticos, palabra reservadad: static
    //Pertenece solo a la clase y no se hereda a los objetos
    static saludar(){
        return console.log('Hola, soy un metodo estatico');
    }
}

//metodo estatico
Animal.saludar();

/* Animal.presentarse(); */
console.log(Animal.getNombre);




//Heredan los atributos y los metodos de la clase que se esta utilizando
const Animal1 = new Animal('Scooby', 'Perro');
//instanciar = hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal('Pecas', 'Gato');
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy' //notacion de punto para cambiar valor
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre('Oddie');
document.write(Animal1.cambiarNombre('Oddie'));// metodo para cambiar valor
console.log(Animal1);

console.log(Animal1.getNombre);

//Getters y Setters
//get = obtener o leer el valor de un Atributo
//set = fijar o cambiar el valor de un Atributo
//Se utilizan como si fueran atributos

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);