class Animalito {
    constructor(nombre, edad, especie,revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado;
        this.enfermo = false;
        
    }

    saludar(){
        return console.log(`Hola mi nimbre es ${this.nombre}`)
    }
}

class Veterinario {
    constructor(){
    this.cantidadPacientes = 0;
    this.pacientesRevisados = 0;
    this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        let mensaje = `Paciente Agregado<br>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados(pacientesRevisados){
        this.pacientesRevisados ++;
    }

    mostrarLista(){
        for (let i = 0; i < this.listaPacientes.length; i++) {           
            document.write(' '+this.listaPacientes[i].nombre);        
        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes}<br>
                        pacientes revisados: ${this.pacientesRevisados}<br>`);
    }


    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            //this.pacientesRevisados ++
            document.write(`Paciente ha sido revisado`)
        }else{
            document.write(`El paciente ya fue revisado`)
        }
    }
}
const VeterinarioPanchito = new Veterinario();

//objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5, 'perro', false);//objeto 1
const Animalito2 = new Animalito('Galleta', 2, 'gato',true);// objeto 2
console.log(Animalito1);
console.log(Animalito2);

VeterinarioPanchito.agregarPaciente(Animalito1);
VeterinarioPanchito.agregarPaciente(Animalito2);

console.log(VeterinarioPanchito.listaPacientes);

VeterinarioPanchito.mostrarLista();
VeterinarioPanchito.revisarPaciente(Animalito1);
VeterinarioPanchito.mostrarLista();

VeterinarioPanchito.revisarPaciente(Animalito2);

//operador de corto circuito