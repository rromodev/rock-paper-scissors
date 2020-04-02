import datos from '../utils/datos.js';

const template = document.createElement('template');

template.innerHTML = `
<style>
    .title {
        color: white;
    }
</style>


    <div class="container is-fluid">
        <h1 class="title">Selecciona un juego:</h1>

        <div id="juegos" class='buttons'>
        </div>

        
    </div>

    <div id="juego" class='container is-fluid'>
    </div>
`

class JuegoPPT extends HTMLElement {

    constructor() {
        super(); 
        console.log('juego!');
        
        //this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this.appendChild(template.content.cloneNode(true));

        datos.juegos.forEach(element => {
            document.querySelector("#juegos").innerHTML += 
                `<button id='${element.id}' class="button">${element.nombre}</button>` //console.log(element.nombre)
        });

        this.opcionesDeJuego = document.querySelectorAll('button');
        this.opcionesDeJuego.forEach(element => {
            element.addEventListener('click', this.comienzaJuego.bind(this, element));
        })
    }

    comienzaJuego(element) {

        const juego = datos.juegos[element.id  - 1];
        
        store.dispatch({ type: 'START_GAME', payload: juego.id })
        let juegodiv = document.querySelector("#juego");
        juegodiv.innerHTML = ""

        // titulo
        let juegoSeleccionado = document.createElement('titulo-score');
        juegoSeleccionado.setAttribute('juego', juego.id);  
        juegodiv.appendChild(juegoSeleccionado);

        // tablero
        let tableroSeleccionado = document.createElement('tablero-opciones');
        tableroSeleccionado.setAttribute('juego', juego.id);        
        juegodiv.appendChild(tableroSeleccionado);
    }

    connectedCallback() {
        
    }
}
customElements.define('juego-ppt', JuegoPPT);