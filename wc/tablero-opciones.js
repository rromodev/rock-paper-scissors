import datos from '../utils/datos.js';

const template = document.createElement('template');

template.innerHTML = `
<style>
    img {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: white;
        background-position: 50% 50%;
        border-radius: 50%;
        border: 5px solid #eee;

        transform: scale(.75);
    }

    div {
        color: white;
    }
</style>
<div>
    <h3>Selecciona una opci&oacute;n</h3>

    <div id='tablero'>
         
    </div>

    <div id='resultado'>
    </div>

    <div id='reglas'>
        
    </div>
</div>
`

class TableroOpciones extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));        

    }

    connectedCallback() {
        const idjuego = this.getAttribute('juego');
        const state = store.getState();

        this.juego = datos.juegos[idjuego - 1];        
        this.render(state);
    }

    render(state) {
        
        let tablero = this.shadowRoot.querySelector("#tablero");

        this.juego.opciones.forEach(element => {
            let img = document.createElement('img');
            img.src = `../images/icon-${element.toLowerCase()}.svg `;
            img.addEventListener('click', this.finalizaJuego.bind(this, element));
            
            tablero.appendChild(img);
        });
    }

    finalizaJuego(element) {

        let housePicked = this.juego.opciones[Math.floor(Math.random() * this.juego.opciones.length)];

        let tablero = this.shadowRoot.querySelector("#tablero");
        tablero.innerHTML = "";
        
        let youPicked = document.createElement('div');
        youPicked.innerHTML = 'You picked: ';
        tablero.appendChild(youPicked);

        let img = document.createElement('img');
        img.src = `../images/icon-${element.toLowerCase()}.svg `;
        tablero.appendChild(img);

        let house = document.createElement('div');
        house.innerHTML = 'House picked: ';
        tablero.appendChild(house);

        let imgHouse = document.createElement('img');
        imgHouse.src = `../images/icon-${housePicked.toLowerCase()}.svg `;
        tablero.appendChild(imgHouse);

        let result = this.shadowRoot.querySelector("#resultado");
        result.innerHTML = this.resultado(element, housePicked)
    }

    resultado(you, house) {

        if(you == house) {
            return "Iguales, vuelve a intentar"
        }
        else {
            let regla = this.juego.reglas.find(x => x.valor == you);
            let x = regla.gana.find(x => x == house);

            if(x) {
                store.dispatch({ type: 'WIN_GAME' })
                return "You Win"
            }
            else {
                return "You Lose"
            }

        }        

        
    }
}

customElements.define('tablero-opciones', TableroOpciones);