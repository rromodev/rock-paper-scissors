import datos from '../utils/datos.js';

const template = document.createElement('template');

template.innerHTML = `
<style>
    #titulo {
        color: white;
    }

    #score {
        color: white;
    }

    #scoreContainer {
        /* border: 3px solid grey;
        border-radius: 8px; */
    }
</style>

    <div id='scoreContainer' class='container'>
        <div class='columns is-desktop'> 
            <h3 id='titulo' class="column"></h3>
            <div id='score' class="column is-4 is-offset-8">
            </div>
        </div>
    </div>
`

class TituloScore extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));        

    }

    connectedCallback() {

        const idjuego = this.getAttribute('juego');
        const juego = datos.juegos[idjuego - 1];

        const state = store.getState();

        this.render(juego, state);
    }

    render(data, state) {
        this.shadowRoot.querySelector("#titulo").innerHTML = data.nombre;
        this.shadowRoot.querySelector("#score").innerHTML = "SCORE " + state.wins;
    }
}

customElements.define('titulo-score', TituloScore);