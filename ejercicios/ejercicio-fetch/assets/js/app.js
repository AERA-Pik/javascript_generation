/* consumiendo una api crear una card en bootstrap para todos los elementos */

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((respuesta) => respuesta.json()) // convertir los datos a objetos
  .then((datos) => {      
        datos.forEach(elemento => {
            /* console.log(elemento);   */      
            let titulo = elemento.title; // gurda el elemento 
            let imagen = elemento.thumbnailUrl;
            /* console.log(titulo, imagen); */
            
            //Agregar al html
            let $cartas = document.querySelector('#cartas');
            let crearCarta = document.createElement('div');
            crearCarta.innerHTML = `<div class='card' style='width: 18rem;'> 
            <img src='${imagen}' class='card-img-top' alt='...'> 
            <div class='card-body'>
            <h5 class='card-title'>${titulo}</h5> 
            </div> 
            </div>`;        
            $cartas.appendChild(crearCarta);
        }); 
        
      });
